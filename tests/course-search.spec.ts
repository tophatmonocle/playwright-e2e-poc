import { test, expect, Locator, Page } from "@playwright/test";
import {LoginPage} from "../page-objects/login";
import constants from "../constants/constants";

test.describe('Course search', () => {
    test('Can find a history course', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.studentLogin();
        await page.locator('button', { hasText: 'Join Course' }).click();
        await page.locator('input[type=text]').fill('History');
        await expect(page.locator('span', {hasText: constants.COURSE_SEARCH.EXPECTED_RESULT})).toBeVisible();
    });
});
