import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('laptop');
  await page.getByRole('button', { name: 'laptop under 50k', exact: true }).click();
  await page.getByRole('link', { name: 'Apply the filter 1.0 to 1.4' }).click();
  await page.locator('#a-autoid-1-announce').click();
  await page.getByRole('button', { name: 'Increase quantity by one', exact: true }).click();
  await page.getByRole('button', { name: 'Increase quantity by one', exact: true }).click();
  await page.getByRole('button', { name: 'Increase quantity by one', exact: true }).click();
});