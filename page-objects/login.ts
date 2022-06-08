// playwright-dev-page.ts
import { expect, Locator, Page } from "@playwright/test";
// @ts-ignore
import constants from "../constants/constants";

export class LoginPage {
  readonly page: Page;
  readonly schoolField: Locator;
  readonly school: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly courseContentPage: Locator;
  readonly courseBodyPage: Locator;
  readonly settingsDropdown: Locator;
  readonly logOut: Locator;


  constructor(page: Page) {
    this.page = page;
    this.schoolField = page.locator("id=select-input-1");
    this.school = page.locator('ul[data-click-id="login-school-menu"] > li', {
      hasText: constants.SCHOOL
    });
    this.email = page.locator('id=username');
    this.password = page.locator('id=password');
    this.loginButton = page.locator('[aria-label="Login"]');
    this.courseContentPage = page.locator('h1', { hasText:  'Your Courses'});
    this.courseContentPage = page.locator('id=main-course-body');
    this.settingsDropdown = page.locator('[data-click-id="settings dropdown button"]');
    this.logOut = page.locator('span', { hasText: 'Log Out'});
  }

  async goto() {
    await this.page.goto(constants.URL);
  }

  async profLogin() {
    await this.schoolField.fill(constants.SCHOOL);
    await this.school.click();
    await this.email.fill(constants.USERNAME_PROF);
    await this.password.fill(constants.PASSWORD);
    await this.loginButton.click();
    await expect(this.courseContentPage || this.courseBodyPage).toBeVisible();
  }

  async studentLogin() {
    await this.schoolField.fill(constants.SCHOOL);
    await this.school.click();
    await this.email.fill(constants.USERNAME_STUD);
    await this.password.fill(constants.PASSWORD);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
    await expect(this.settingsDropdown).toBeVisible();
  }
  async studentUnpaidLogin() {
    await this.schoolField.fill(constants.SCHOOL);
    await this.school.click();
    await this.email.fill(constants.USERNAME_STUD_UNPAID);
    await this.password.fill(constants.PASSWORD);
    await this.loginButton.click();
    await expect(this.courseContentPage || this.courseBodyPage).toBeVisible();
  }

  async logout() {
    await this.settingsDropdown.click();
    await this.logOut.click();

  }

}
