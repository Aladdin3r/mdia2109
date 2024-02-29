// @ts-check
const { test, expect } = require('@playwright/test');

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

  test('h1 tag', async({ page }) => {
    await expect(page.locator('h1')).toContainText('Home Page');
  })

  test('Paragraph tag',async({ page }) => {
    await expect(page.getByText('Studying!')).toBeVisible();
  })
})

test.describe('Tablet viewport block', () => {
  test.use({ viewport: { width: 820, height: 1180 } });

  test.beforeEach(async ({ page }) => {
    console.log("before checking for colour");
    await page.goto('http://localhost:3000/');
  })

  test('colouring box', async ({ page }) => {
    const mainContainer = page.locator("#coloring");

    const checkingBackgroundColor = await mainContainer.evaluate((element) => {
      return window.getComputedStyle(element).getPropertyValue("background-color");
    })

    console.log(checkingBackgroundColor);
    expect(checkingBackgroundColor).toBe("rgb(251, 255, 0)");
  })
})

test.describe('Mobile viewport block', () => {
  test.use({ viewport: { width: 414, height: 896 } });

  test.beforeEach(async ({ page }) => {
    console.log("before checking for colour");
    await page.goto('http://localhost:3000/');
  })

  test('colouring box', async ({ page }) => {
    const mainContainer = page.locator("#coloring");

    const checkingBackgroundColor = await mainContainer.evaluate((element) => {
      return window.getComputedStyle(element).getPropertyValue("background-color");
    })

    console.log(checkingBackgroundColor);
    expect(checkingBackgroundColor).toBe("rgb(255, 165, 0)");
  })
})