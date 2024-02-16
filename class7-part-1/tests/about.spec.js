const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
    console.log("begin one unit test");
})

test.afterEach(async ({ page }) => {
    console.log("end one unit test");
})

test.describe('About Page Banner', () => {
    test.beforeEach(async ({ page }) => {
        console.log("Before about page banner test");
        await page.goto('http://localhost:3000/About');
    })

    test.afterEach(async ({ page }) => {
        console.log("After about page banner test");
    })

    test('button', async({ page }) => {
        await page.getByRole('button', { name: 'Review' }).click();
    })

    test('heading 1', async({ page }) => {
        await expect(page.locator('h1')).toContainText('Study More!');
    })
})