import { test, expect, Page} from "@playwright/test";
import {LoginPage} from "../page-objects/login";
import constants from "../constants/constants";
import billingConstants from '../constants/billing/constants'



test.describe("Billing Checkout Screen",  () => {
    test('appears to be somewhat functional', async ({page}) => {
        const loginPage = new LoginPage(page);
        const TEST_JOIN_CODE = billingConstants.TEST_COURSES.COURSE_WITH_REQUIRED_ITEMS;
        await loginPage.goto();
        await loginPage.studentUnpaidLogin();
        await page.goto(`${constants.URL}/billing/course/${TEST_JOIN_CODE}/checkout`);
        await expect(page.locator('#cardNumber')).toBeVisible();
        await expect(page.locator('[data-id="total"]')).toBeVisible();

    })
})
