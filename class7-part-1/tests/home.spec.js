const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    console.log("begin one unit test");
})

test.afterEach(async ({ page }) => {
    console.log("end one unit test");
})

test.describe('Head area', () => {
    test('Meta description', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute(
            'content',
            'BCIT information'
        )
    })
})

test.describe('Home Page Banner', () => {
    test.beforeEach(async ({ page }) => {
        console.log("Before home page banner test");
        await page.goto('http://localhost:3000/');
    })

    test.afterEach(async ({ page }) => {
        console.log("After home page banner test");
    })

    test('button', async({ page }) => {
        await page.getByRole('button', { name: 'Register'}).click();
    })

    test('text', async({ page }) => {
        await expect(page.getByText('Welcome to BCIT!')).toBeVisible();
    })
})

test.describe('Footer', () => {
    test.beforeEach(async ({ page }) => {
        console.log("Before home page footer test");
        await page.goto('http://localhost:3000/');
    })

    test.afterEach(async ({ page }) => {
        console.log("After home page footer test");
    })

    test('copyright', async ({ page}) => {
        await expect(page.getByRole('listitem')).toHaveCount(1);
    })
})

test.describe('Main', () => {
    test.beforeEach(async ({ page }) => {
        console.log("Before home page main test");
        await page.goto('http://localhost:3000/');
    })

    test.afterEach(async ({ page }) => {
        console.log("After home page main test");
    })

    test('main id location', async({ page }) => {
        await expect(page.locator('#tester')).toHaveCount(1);
    })

    test('main class location', async({ page }) => {
        await expect(page.locator('.classStyle')).toHaveCount(1);
    })
})

test.describe('Go to about page', () => {
    test.beforeEach(async ({ page }) => {
        console.log("Before checking for link");
        await page.goto('http://localhost:3000/');
    })

    test.afterEach(async ({ page }) => {
        console.log("After going to About page");
    })

    test("Link to about page", async({ page }) => {
        await page.click('text=About');
        await expect(page).toHaveURL('http://localhost:3000/About');
        await expect(page.locator('h1')).toContainText('Study More!');
    })
})