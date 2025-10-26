import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = "light" | "dark" | "auto";
type UserRole = "admin" | "freelancer" | "client";

interface ThemePreset {
  id: string;
  name: string;
  theme: Theme;
  colors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };
}

interface ThemeContextType {
  theme: Theme;
  currentPreset: ThemePreset;
  rolePresets: ThemePreset[];
  setTheme: (theme: Theme) => void;
  setPreset: (preset: ThemePreset) => void;
  toggleTheme: () => void;
  userRole: UserRole | null;
  setUserRole: (role: UserRole) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Default theme presets for each role
const defaultPresets: Record<UserRole, ThemePreset[]> = {
  admin: [
    { id: 'admin-light', name: 'Admin Light', theme: 'light' },
    { id: 'admin-dark', name: 'Admin Dark', theme: 'dark' },
    { id: 'admin-auto', name: 'Auto (System)', theme: 'auto' },
    { 
      id: 'admin-custom', 
      name: 'Professional', 
      theme: 'light',
      colors: {
        primary: '#1e40af',
        secondary: '#3b82f6',
        accent: '#60a5fa'
      }
    }
  ],
  freelancer: [
    { id: 'freelancer-light', name: 'Freelancer Light', theme: 'light' },
    { id: 'freelancer-dark', name: 'Freelancer Dark', theme: 'dark' },
    { id: 'freelancer-auto', name: 'Auto (System)', theme: 'auto' },
    { 
      id: 'freelancer-custom', 
      name: 'Creative', 
      theme: 'dark',
      colors: {
        primary: '#7c3aed',
        secondary: '#a78bfa',
        accent: '#c4b5fd'
      }
    }
  ],
  client: [
    { id: 'client-light', name: 'Client Light', theme: 'light' },
    { id: 'client-dark', name: 'Client Dark', theme: 'dark' },
    { id: 'client-auto', name: 'Auto (System)', theme: 'auto' },
    { 
      id: 'client-custom', 
      name: 'Elegant', 
      theme: 'light',
      colors: {
        primary: '#059669',
        secondary: '#10b981',
        accent: '#34d399'
      }
    }
  ]
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [theme, setThemeState] = useState<Theme>('light');
  const [currentPreset, setCurrentPreset] = useState<ThemePreset>(defaultPresets.admin[0]);

  // Load saved theme preferences on mount
  useEffect(() => {
    const savedRole = localStorage.getItem('userRole') as UserRole | null;
    if (savedRole) {
      setUserRole(savedRole);
      const savedPresetId = localStorage.getItem(`theme-preset-${savedRole}`);
      if (savedPresetId) {
        const rolePresets = defaultPresets[savedRole];
        const savedPreset = rolePresets.find(p => p.id === savedPresetId);
        if (savedPreset) {
          setCurrentPreset(savedPreset);
          setThemeState(savedPreset.theme);
        }
      }
    }
  }, []);

  // Detect user role from URL
  useEffect(() => {
    const path = window.location.pathname;
    let detectedRole: UserRole | null = null;
    
    if (path.startsWith('/admin')) {
      detectedRole = 'admin';
    } else if (path.startsWith('/freelancer')) {
      detectedRole = 'freelancer';
    } else if (path.startsWith('/client')) {
      detectedRole = 'client';
    }

    if (detectedRole && detectedRole !== userRole) {
      setUserRole(detectedRole);
      localStorage.setItem('userRole', detectedRole);
      
      // Load role-specific theme
      const savedPresetId = localStorage.getItem(`theme-preset-${detectedRole}`);
      if (savedPresetId) {
        const rolePresets = defaultPresets[detectedRole];
        const savedPreset = rolePresets.find(p => p.id === savedPresetId);
        if (savedPreset) {
          setCurrentPreset(savedPreset);
          setThemeState(savedPreset.theme);
        }
      } else {
        // Use default preset for role
        setCurrentPreset(defaultPresets[detectedRole][0]);
        setThemeState(defaultPresets[detectedRole][0].theme);
      }
    }
  }, [userRole]);

  // Apply theme to DOM
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Handle auto theme
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const applyAutoTheme = (e: MediaQueryList | MediaQueryListEvent) => {
        root.classList.remove('light', 'dark');
        root.classList.add(e.matches ? 'dark' : 'light');
      };
      
      applyAutoTheme(mediaQuery);
      mediaQuery.addEventListener('change', applyAutoTheme);
      
      return () => mediaQuery.removeEventListener('change', applyAutoTheme);
    } else {
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
    }

    // Apply custom colors if present
    if (currentPreset.colors) {
      if (currentPreset.colors.primary) {
        root.style.setProperty('--color-primary-custom', currentPreset.colors.primary);
      }
      if (currentPreset.colors.secondary) {
        root.style.setProperty('--color-secondary-custom', currentPreset.colors.secondary);
      }
      if (currentPreset.colors.accent) {
        root.style.setProperty('--color-accent-custom', currentPreset.colors.accent);
      }
    }
  }, [theme, currentPreset]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    const newPreset = { ...currentPreset, theme: newTheme };
    setCurrentPreset(newPreset);
    if (userRole) {
      localStorage.setItem(`theme-preset-${userRole}`, newPreset.id);
    }
  };

  const setPreset = (preset: ThemePreset) => {
    setCurrentPreset(preset);
    setThemeState(preset.theme);
    if (userRole) {
      localStorage.setItem(`theme-preset-${userRole}`, preset.id);
    }
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('auto');
    } else {
      setTheme('light');
    }
  };

  const rolePresets = userRole ? defaultPresets[userRole] : defaultPresets.admin;

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      currentPreset,
      rolePresets,
      setTheme, 
      setPreset,
      toggleTheme,
      userRole,
      setUserRole
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};