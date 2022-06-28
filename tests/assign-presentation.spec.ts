/**
 * @license
 * @Owner Assessment Delivery
 * @Slack #team-assessment
 * @Runbook https://tophat.atlassian.net/wiki/spaces/TOP/pages/885358599/Sanity+Slack+Failure+-+Runbook
 * @Description
 *   - Logs in as Professor (devops_monitoring_prof:1q2w3e4r)
 *   - Navigates to Course (US - 475472, CA - 946475)
 *   - Selects first item in Tree (Text for presentation sanity to match on)
 *   - Clicks the Assign dropdown
 *   - Selects the "Review" radio button
 *   - Clicks the "Assign to" dropdown
 *   - Clicks "Selected students..."
 *   - In the new table, clicks the checkbox next to the first student (sanity+stud0@tophatmonocle.com)
 *   - Clicks "Done"
 *   - Clicks "Assign" on the dropdown
 *   - Sees that items are now titled "Review"
 *   - Sees now in the Tree the selected item now has the subtitle "3 Assigned"
 */

import { test } from "@playwright/test";
import { LoginPage } from "../page-objects/login";
import {Navigation} from "../page-objects/navigation";
// @ts-ignore
import constants from "../constants/constants";
import {Content} from "../page-objects/content";

test.describe("Assign presentation", () => {
    test("should be able to assign presentation", async ({ page }) => {
        const loginPage = new LoginPage(page);
        const navigation = new Navigation(page);
        const content = new Content(page);
        await loginPage.goto();
        await loginPage.profLogin();
        await navigation.goToContent(constants.TEST_ASSIGN_PRESENTATION_COURSE_ID);
        await content.unassignIfNeeded();
        await content.assignPresentationSpecificStudent();

    });
});
