import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

test('about page', async ({ page }) => {

    await page.getByRole('tab', {name: 'About'}).click();
    // Expects the URL to contain /.
    await expect(page).toHaveURL('http://localhost:3000/');

    await expect(page.getByRole('link', {name: 'Edu Designs'})).toHaveText('Edu Designs')

    await expect(page.getByRole('tab', {name: 'About'})).toHaveCount(1)
    await expect(page.getByRole('tab', {name: 'UI/UX'})).toHaveCount(1)
    await expect(page.getByRole('tab', {name: 'Designs'})).toHaveCount(1)
    await expect(page.getByRole('tab', {name: 'More-Designs'})).toHaveCount(1)

    await expect(page.getByText('© 2025 Edwin')).toHaveCount(1)
    await expect(page.getByRole('img', {name: 'me'})).toBeVisible()
})

test('nature gallery', async ({ page }) => {
    await page.getByRole('tab', {name: 'UI/UX'}).click();
    // Expects the URL to contain UI/UX
    await expect(page).toHaveURL('http://localhost:3000/gallery/UI/UX', {timeout: 30000});

    await expect(page.getByText('Check Out my UI/UX Designs')).toHaveCount(1)
    await expect(page.getByRole('img', {name: 'Desktop UI'})).toHaveCount(1)
    await expect(page.getByRole('img', {name: 'Desktop Wireframe'})).toBeVisible()

    await page.getByRole('img', {name: 'Desktop Wireframe'}).click();
    await page.locator('div').filter({hasText: /^Desktop Wireframe$/}).nth(1).click();
})
test('signs gallery', async ({ page }) => {

    await page.getByRole('tab', { name: 'Designs' }).click();
    await expect(page).toHaveURL('http://localhost:3000/gallery/Designs', {timeout: 30000});

    await expect(page.getByText('These are THE DESIGNS - follow them')).toHaveCount(1)
    await expect(page.getByRole('img', { name: 'Brochures and Flyers' })).toHaveCount(1)

    await page.getByRole('tab', { name: 'More-Designs' }).click();
    await expect(page.getByRole('img', { name: 'More-Designs' })).toHaveCount(1)

    await page.getByRole('tab', { name: 'About' }).click();
    await expect(page.getByRole('heading', { name: 'About Me' })).toHaveCount(1)

});