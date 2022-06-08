/**
 * @license
 * @Owner Accounts
 * @Slack #team-accounts
 * @Runbook https://tophat.atlassian.net/wiki/spaces/TOP/pages/885358599/Sanity+Slack+Failure+-+Runbook
 * @Description
 *   - Ensure no user is logged in
 *   - Goes to url of Anon Course
 *   - US: https://app.tophat.com/e/579905
 *   - CA: https://app-ca.tophat.com/e/212127
 *   - Click "Enter as a Guest" button
 *   - Confirms that student is in the course
 */

import { test } from '@playwright/test';
import {Navigation} from "../page-objects/navigation";

test.describe('Anon Access',  () => {
    test('should be able to access anon course', async ({page}) => {
        const navigation = new Navigation(page);
        await navigation.goToContentAnon();
    });
});
