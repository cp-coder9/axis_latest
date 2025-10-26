
import { test, expect } from '@playwright/test';

test.describe('Theme switcher and timer animation verification', () => {
  test('should switch theme on admin dashboard and show timer', async ({ page }) => {
    // Verify theme switcher
    await page.goto('http://localhost:5173/admin/dashboard');
    await page.screenshot({ path: 'jules-scratch/verification/admin_dashboard_light.png' });

    // Click the theme switcher
    await page.locator('button[class*="transition-transform"]').click();

    // Wait for dark mode and take screenshot
    await expect(page.locator('html')).toHaveClass('dark');
    await page.screenshot({ path: 'jules-scratch/verification/admin_dashboard_dark.png' });

    // Verify countdown timer
    await page.goto('http://localhost:5173/freelancer/timer/active');
    await page.screenshot({ path: 'jules-scratch/verification/timer_page.png' });
    await expect(page.getByTestId('countdown-timer')).toBeVisible();
    await page.screenshot({ path: 'jules-scratch/verification/verification.png' });
  });
});
