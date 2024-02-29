// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page })=> {
  console.log("Begine one unit test");
})

test.afterEach(async ({ page })=> {
  console.log("end one unit test");
})

test.describe('Header testing', () => {
  test.beforeEach(async ({ page }) => {
    console.log("Before checking for header area");
    await page.goto('http://localhost:3000/');
  })

  test.afterEach(async ({ page }) => {
    console.log("After checking header area");
  })

  test('Checking h1 tag', async({ page }) => {
    await expect(page.locator('h1')).toContainText('Home Page');
  })
})

test.describe('Label testing', () => {
  test.beforeEach(async ({ page }) => {
    console.log("Before checking for label area");
    await page.goto('http://localhost:3000/');
  })

  test.afterEach(async ({ page }) => {
    console.log("After checking label area");
  })

  test('Test for environmental variables in input field', async ({ page }) => {
    await page.getByLabel('User Name').fill(process.env.USERNAME);
    await page.getByLabel('Password').fill(process.env.PASSWORD);
  })
})