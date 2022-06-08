/**
 * @license
 * @Owner Teach
 * @Slack #team-teach
 * @Runbook https://tophat.atlassian.net/wiki/spaces/TOP/pages/885358599/Sanity+Slack+Failure+-+Runbook
 * @Description
 *   - Logs in as Professor (devops_monitoring_prof:1q2w3e4r)
 *   - Goes to test course by join code (US:366847,CA:689316)
 *   - Takes attendance
 *	 - Logs out as prof
 *	 - Logs in as a student (devops_monitoring_student:1q2w3e4r)
 *   - Submits correct code as a student
 *   - Confirms student sees marked present screen
 *   - Logs out student
 *   === CLEANUP
 *   - Logs in as prof
 *   - Closes attendance
 *   - Navigate to gradebook and delete the attendance item
 */

import { test } from "@playwright/test";
import { LoginPage } from "../page-objects/login";
import { Navigation} from "../page-objects/navigation";
// @ts-ignore
import constants from "../constants/constants";



test.describe("Professor Login", () => {
    test.afterEach(async({page}) => {
        const loginPage = new LoginPage(page);
        const navigation = new Navigation(page);
        await loginPage.goto();
        await loginPage.profLogin();
        await navigation.goToContent(constants.TEST_COURSE_ID)
    });
    test("should be able to login as a prof", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.profLogin();
    });
});
