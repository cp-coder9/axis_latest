import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Check } from 'lucide-react';

const ThemeCustomizer: React.FC = () => {
  const { currentPreset, rolePresets, setPreset, userRole } = useTheme();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Theme Preferences</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Choose your preferred theme for the {userRole} dashboard. Your selection will be saved automatically.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rolePresets.map((preset) => {
          const isSelected = currentPreset.id === preset.id;
          
          return (
            <button
              key={preset.id}
              onClick={() => setPreset(preset)}
              className={`
                relative p-6 rounded-lg border-2 transition-all text-left
                ${isSelected 
                  ? 'border-primary bg-primary/10' 
                  : 'border-border hover:border-primary/50 bg-card'
                }
              `}
            >
              {isSelected && (
                <div className="absolute top-4 right-4">
                  <div className="bg-primary text-primary-foreground rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <h4 className="font-semibold text-base">{preset.name}</h4>
                <p className="text-sm text-muted-foreground capitalize">
                  Mode: {preset.theme}
                </p>
                
                {preset.colors && (
                  <div className="flex gap-2 mt-3">
                    {preset.colors.primary && (
                      <div 
                        className="w-8 h-8 rounded-md border border-border"
                        style={{ backgroundColor: preset.colors.primary }}
                        title="Primary color"
                      />
                    )}
                    {preset.colors.secondary && (
                      <div 
                        className="w-8 h-8 rounded-md border border-border"
                        style={{ backgroundColor: preset.colors.secondary }}
                        title="Secondary color"
                      />
                    )}
                    {preset.colors.accent && (
                      <div 
                        className="w-8 h-8 rounded-md border border-border"
                        style={{ backgroundColor: preset.colors.accent }}
                        title="Accent color"
                      />
                    )}
                  </div>
                )}
              </div>
              
              {/* Theme preview */}
              <div className={`mt-4 p-4 rounded-md ${
                preset.theme === 'dark' ? 'bg-gray-900' : 
                preset.theme === 'light' ? 'bg-gray-50' : 
                'bg-gradient-to-r from-gray-50 to-gray-900'
              }`}>
                <div className="text-xs opacity-75">Preview</div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="bg-muted/50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">About Themes</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• <strong>Light:</strong> Bright theme for daytime use</li>
          <li>• <strong>Dark:</strong> Darker theme that's easier on the eyes</li>
          <li>• <strong>Auto:</strong> Automatically switches based on your system settings</li>
          <li>• <strong>Custom:</strong> Role-specific theme with custom colors</li>
        </ul>
      </div>
    </div>
  );
};

export default ThemeCustomizer;
