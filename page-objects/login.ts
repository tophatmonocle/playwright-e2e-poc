// playwright-dev-page.ts
import { expect, Locator, Page } from "@playwright/test";
import constants from "../constants/constants";

export class LoginPage {
  readonly page: Page;
  readonly schoolField: Locator;
  readonly school: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.schoolField = page.locator("id=select-input-1");
    this.school = page.locator('ul[data-click-id="login-school-menu"] > li', {
      hasText: "Top Hat University - Internal Rollouts",
    });
    this.email = page.locator("id=username");
    this.password = page.locator("id=password");
    this.loginButton = page.locator('[aria-label="Login"]');
    this.header = page.locator('[aria-label="Courses, Account and Help"]');
  }

  async goto() {
    await this.page.goto(constants.CA.URL);
  }

  async profLogin() {
    await this.schoolField.fill("Top Hat University - Internal Rollouts");
    await this.school.click();
    await this.email.fill("eugene.medentsii+prof@tophatmonocle.com");
    await this.password.fill("tophat1234");
    await this.loginButton.click();
    await expect(this.header).toBeVisible();
  }
}
