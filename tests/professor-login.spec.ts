/**
 * @license
 * @Owner People and Places
 * @Slack #devops
 * @Pagerduty pagerduty-devops
 * @Runbook https://tophat.atlassian.net/wiki/spaces/TOP/pages/885358599/Sanity+Slack+Failure+-+Runbook
 * @Description
 *   - Confirms login works with Prof account (devops_monitoring_prof:1q2w3e4r)
 *   - Runbook if Cloudflare is down: https://github.com/tophatmonocle/cloudflare-config/blob/master/runbook.md#cloudflare-outages
 */



import { test } from "@playwright/test";
import { LoginPage } from "../page-objects/login";

test.describe("Professor Login", () => {
  test("should be able to login as a prof", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.profLogin();
    await loginPage.logout();

  });
});
