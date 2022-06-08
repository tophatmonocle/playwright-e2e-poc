/*
 * Declares constants used across multiple tests
 *
 * const env = (global.SANITY_VARIABLES.APP_ENV == 'CA') ? ('CA') : ('US')
 * const constants = require('./constants/constants')[env];
 *
 */

import { environment } from './utils'

const commonConstants = {
    defaultTimeout: 60000, // milliseconds
    defaultTestTimeout: 60000 * 5, // milliseconds
}

const CA = {
    TEST_COURSE_ID: '689316',
    TEST_PRESENTATION_COURSE_ID: '681616',
    TEST_ASSIGN_PRESENTATION_COURSE_ID: '946475',
    TEST_ASSIGN_PRESENTATION_MODULE_ITEM_ID: '3339048',
    TEST_DISCUSSION_COURSE_JOIN_CODE: '096611',
    TEST_SLIDE_TRANSITION_COURSE_ID: '219184',
    TEST_GCQ_COURSE_JOIN_CODE: '706873',
    TEST_LAQ_COURSE_JOIN_CODE: '240803',
    TEST_SLIDE_PRESENTATION_MODULE_ITEM_ID: '2517968',
    TEST_QUESTION_UPLOAD: '528517',
    URL: 'https://app-ca.tophat.com',
    USERNAME_PROF: 'sanity+prof4@tophatmonocle.com',
    USERNAME_STUD: 'sanity+stud0@tophatmonocle.com',
    ID_STUD: '414077',
    USERNAME_STUD_UNPAID: 'sanity+studunpaid@tophatmonocle.com',
    PASSWORD: '1q2w3e4r',
    SCHOOL: 'Professor Test Organization CA',
    COUPON_CODE_SECRET_KEY: 'sanity_runner/coupon_code_ca',
    SENDGRID_API_SECRET_KEY: 'sanity_runner/sendgrid_api',
    SMS_RESPONSE: {
        COURSE_ID: '037565',
        PINPOINT_PROJECT_NAME: 'sanity-runner-us',
        USERNAME_STUD: 'devops+monitoringsanitysms2@tophat.com',
    },
    ANON_ACCESS: {
        COURSE_ID: '212127',
        EXPECTED_RESULT: 'Anon Access',
    },
    COURSE_SEARCH: {
        EXPECTED_RESULT: 'Canadian History',
    },
    STUDENT_MANAGER: {
        EXPECTED_RESULT: 'Top Hat: Invitation to join course',
    },
    MARKETPLACE_SSR: {
        URL: 'https://tophat.com/catalog/',
    },
    MULTI_SECTION: {
        COORDINATOR_USERNAME: 'sanity+msmcoordinator@tophatmonocle.com',
        INSTRUCTOR_USERNAME: 'sanity+msminstructor@tophatmonocle.com',
    },
    NEW_ACCOUNT_PASSWORD: '1q2w3e4r',
}

const US = {
    TEST_COURSE_ID: '366847',
    TEST_PRESENTATION_COURSE_ID: '725989',
    TEST_ASSIGN_PRESENTATION_COURSE_ID: '475472',
    TEST_ASSIGN_PRESENTATION_MODULE_ITEM_ID: '226181191',
    TEST_DISCUSSION_COURSE_JOIN_CODE: '034718',
    TEST_SLIDE_TRANSITION_COURSE_ID: '658021',
    TEST_SLIDE_PRESENTATION_MODULE_ITEM_ID: '131841210',
    TEST_QUESTION_UPLOAD: '045350',
    TEST_GCQ_COURSE_JOIN_CODE: '200718',
    TEST_LAQ_COURSE_JOIN_CODE: '730046',
    URL: 'https://app.tophat.com',
    USERNAME_PROF: 'sanity+prof2@tophatmonocle.com',
    USERNAME_STUD: 'sanity+stud0@tophatmonocle.com',
    ID_STUD: '4107992',
    USERNAME_STUD_UNPAID: 'sanity+studunpaid@tophatmonocle.com',
    PASSWORD: '1q2w3e4r',
    SCHOOL: 'Top Hat University - Demos',
    COUPON_CODE_SECRET_KEY: 'sanity_runner/coupon_code_us',
    SENDGRID_API_SECRET_KEY: 'sanity_runner/sendgrid_api',
    SMS_RESPONSE: {
        COURSE_ID: '095680',
        PINPOINT_PROJECT_NAME: 'sanity-runner-us',
        USERNAME_STUD: 'devops+monitoringsanitysms2@tophat.com',
    },
    ANON_ACCESS: {
        COURSE_ID: '579905',
        EXPECTED_RESULT: 'Anonymous Access',
    },
    COURSE_SEARCH: {
        EXPECTED_RESULT: 'American History',
    },
    STUDENT_MANAGER: {
        EXPECTED_RESULT: 'Top Hat: Invitation to join course',
    },
    IMPORT_FROM_MARKETPLACE: {
        COURSE_ID: '521866',
        COURSE_NAME: 'Monitoring 105',
    },
    MARKETPLACE_SSR: {
        URL: 'https://tophat.com/catalog/',
    },
    OLD_PAID_REG: {
        COURSE_ID: '736298',
    },
    MULTI_SECTION: {
        COORDINATOR_USERNAME: 'sanity+msmcoordinator@tophatmonocle.com',
        INSTRUCTOR_USERNAME: 'sanity+msminstructor@tophatmonocle.com',
    },
    NEW_ACCOUNT_PASSWORD: '1q2w3e4r',
}

const STAGING = {
    USERNAME_PROF: 'sanity+prof20210203@tophatmonocle.com',
    USERNAME_STUD: 'sanity+student1560187595206@tophatmonocle.com',
    ID_STUD: '79798665',
    USERNAME_STUD_UNPAID: 'sanity+studunpaid@tophatmonocle.com',
    COUPON_CODE_SECRET_KEY: 'sanity_runner/coupon_code_us',
    SENDGRID_API_SECRET_KEY: 'sanity_runner/sendgrid_api',
    SMS_RESPONSE: {
        COURSE_ID: '217077',
        PINPOINT_PROJECT_NAME: 'sanity-runner-us',
        USERNAME_STUD: 'devops+monitoringsanitysms2@tophat.com',
    },
    PASSWORD: '1q2w3e4r',
    SCHOOL: 'TopHat University',
    URL: 'https://staging.dev.tophat.com',
    TEST_COURSE_ID: '137559',
    TEST_PRESENTATION_COURSE_ID: '111150',
    TEST_ASSIGN_PRESENTATION_COURSE_ID: '172538',
    TEST_ASSIGN_PRESENTATION_MODULE_ITEM_ID: '79948885',
    TEST_DISCUSSION_COURSE_JOIN_CODE: '242545',
    TEST_SLIDE_TRANSITION_COURSE_ID: '777701',
    TEST_QUESTION_UPLOAD: '407879',
    TEST_LAQ_COURSE_JOIN_CODE: '093179',
    TEST_GCQ_COURSE_JOIN_CODE: '837732',
    ANON_ACCESS: {
        COURSE_ID: '579905',
        EXPECTED_RESULT: 'Anonymous Access',
    },
    COURSE_SEARCH: {
        EXPECTED_RESULT: 'American History',
    },
    STUDENT_MANAGER: {
        EXPECTED_RESULT: 'Top Hat: Invitation to join course',
    },
    IMPORT_FROM_MARKETPLACE: {
        COURSE_ID: '926322',
    },
    MARKETPLACE_SSR: {
        URL: 'https://marketplace-ssr.dev.tophat.com/catalog/',
    },
    MULTI_SECTION: {
        COORDINATOR_USERNAME: 'sanity+msmcoordinator@tophatmonocle.com',
        INSTRUCTOR_USERNAME: 'sanity+msminstructor@tophatmonocle.com',
    },
    NEW_ACCOUNT_PASSWORD: '1q2w3e4r',
}

const LOCAL = { ...US, URL: 'https://local.dev.tophat.com' }

const environments = {
    US,
    CA,
    STAGING,
    LOCAL,
}

export type EnvironmentConstants = typeof environments

const constants = {
    ...commonConstants,
    ...environments[environment],
}

export default constants
