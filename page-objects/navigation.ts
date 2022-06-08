import { expect, Locator, Page } from "@playwright/test";
// @ts-ignore
import constants from "../constants/constants";

export class Navigation {
    readonly page: Page;
    readonly anonLoginButton: Locator;
    readonly anonCourseHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.anonLoginButton = page.locator('button[data-click-id="guest login button"]');
        this.anonCourseHeader = page.locator('[data-click-id="course header title"]', {hasText: constants.ANON_ACCESS.EXPECTED_RESULT});
    }

    async goToContent(courseCode: string) {
        await this.page.goto(`${constants.URL}/e/${courseCode}`);

    }

    async goToContentAnon() {
        await this.goToContent(constants.ANON_ACCESS.COURSE_ID);
        await this.anonLoginButton.click();
        //await this.page.waitForNavigation({ waitUntil: "networkidle" });
        //await this.anonLoginButton.click();
        await expect(this.anonCourseHeader).toBeVisible();
        //retrn new Navigation(this.page);

    //TODO: Return new content page object
    }
}
