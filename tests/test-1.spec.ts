import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://uk.huel.com/');
  await page.getByTestId('IconLink-Search').click();
  await page.getByTestId('SearchBar__input').click();
  await page.getByTestId('SearchBar__input').fill('powder');
  await page.getByTestId('SearchBar__input').press('Enter');
  await page.getByRole('link', { name: 'Shop Powder' }).click();
  await page.goto("https://uk.huel.com/products/build-your-own-bundle?mrasn=1147862.1422524.ieVObVED#/?product=huel");
  await expect(page.getByRole('heading', { name: 'Huel Powder', exact: true }).locator('slot')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cinnamon Swirl Increase' })).toBeVisible();
  await page.getByRole('button', { name: 'Cinnamon Swirl Increase' }).click();
  await expect(page.getByRole('spinbutton', { name: 'Cinnamon Swirl Quantity' })).toBeVisible();
  await expect(page.getByRole('spinbutton', { name: 'Cinnamon Swirl Quantity' })).toHaveValue('1');
  await page.getByTestId('IconLink-Search').click();
  await expect(page.getByTestId('Search').locator('div').first()).toBeVisible();
});