import { test, expect } from '@playwright/test';

test('homepage has React link', async ({ page }) => {
  await page.goto('http://localhost:3000'); // or correct port serve uses
  await expect(page.locator('a.App-link')).toHaveText('Learn React');
});
