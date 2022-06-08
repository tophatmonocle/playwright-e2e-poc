import {expect, Locator, Page} from "@playwright/test" ;
// @ts-ignore
import constants from "../constants/constants";

export class Content{
    readonly page: Page;
    readonly assignModuleItemID: Locator;
    readonly presentModuleItemButton: Locator;
    readonly assignModuleItemButton: Locator;
    readonly unassignModuleItem: Locator;
    readonly privateItem: Locator;
    readonly reviewRadioButton: Locator;
    readonly assignToWhomDropdown: Locator;
    readonly assignSubmit: Locator;
    readonly assignToWhomSelect: Locator;
    readonly selectStudent: Locator;
    readonly pickStudent: Locator;

    readonly studentConfirm: Locator;
    readonly assignedAssert: Locator;
    readonly presentationStudent: Locator;




    constructor(page: Page){
        this.page = page;
        this.assignModuleItemID = page.locator(`[data-click-id="tree item ${constants.TEST_ASSIGN_PRESENTATION_MODULE_ITEM_ID}"]`);
        this.presentModuleItemButton = page.locator('[data-click-id="present module item arrow button"');
        this.assignModuleItemButton = page.locator('[data-click-id="assign module item button"]');
        this.unassignModuleItem = page.locator('button[data-click-id="unassign module item"');
        this.privateItem = page.locator('span', {hasText: 'Private'});
        this.reviewRadioButton = page.locator('input[value="review"]');
        this.assignToWhomDropdown = page.locator('[data-click-id="assign to whom dropdown button"]');
        this.assignToWhomSelect = page.locator('[data-click-id="assign to whom select_students"]');
        this.selectStudent = page.locator('[data-click-id="select students button"]');
        this.pickStudent = page.locator(`[data-click-id="${constants.ID_STUD} list item checkbox`);
        this.studentConfirm = page.locator('[data-click-id="select students confirm"]');
        this.assignSubmit = page.locator('[data-click-id="assign popover submit button"');
        this.assignedAssert = page.locator('span', {hasText: '3 assigned items'});


    }

    async unassignIfNeeded(){
        await this.assignModuleItemID.click();
        //await expect(this.presentModuleItemButton).toBeVisible();

        if(await this.page.$('button[data-click-id="unassign module item"')) {
            await this.unassignModuleItem.click();
        }
    }

    async assignPresentationSpecificStudent(){
        await this.assignModuleItemID.click();
        await this.assignModuleItemButton.click();
        await this.reviewRadioButton.click();
        await this.assignToWhomDropdown.click();
        await this.assignToWhomSelect.click();
        await this.selectStudent.click();
        await this.studentConfirm.click();

    }

}
