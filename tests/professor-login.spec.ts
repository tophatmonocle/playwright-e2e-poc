import { test } from "@playwright/test";
import { LoginPage } from "../page-objects/login";

test.describe("Professor Login", () => {
  test("shoul be able to login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.profLogin();
  });
});
