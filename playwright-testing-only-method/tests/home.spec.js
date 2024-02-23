
// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

test.beforeEach(async ({ page }) => {
  console.log("begin one unit test");
})

test.afterEach(async ({ page }) => {
  console.log("end one unit test");
})

test.describe('Header test', () => {
  test.beforeEach(async ({ page }) => {
    console.log("Before checking for header area");
    await page.goto('http://localhost:3000/');
  })

  test.afterEach(async ({ page }) => {
    console.log("After checking for header area");
  })

  test.only('h1 tag', async({ page }) => {
    await expect(page.locator('h1')).toContainText('Home Page');
  })

  test('Paragraph tag',async({ page }) => {
    await expect(page.getByText('Studying!')).toBeVisible();
  })
})

test.describe('Go to About Page', () => {
  test.beforeEach(async ({ page}) => {
    console.log("Before checking for link on home page");
    await page.goto('http://localhost:3000')
  })

  test.afterEach(async ({ page }) => {
    console.log("After going to about page");
  })

  test('Link to About page', async({ page }) => {
    await page.click('text=About');
    await expect(page).toHaveURL('http://localhost:3000/About');
    await expect(page.locator('h1')).toContainText('About Page');
  })
})