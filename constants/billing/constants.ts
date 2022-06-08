import secrets from '../../helpers/secrets'
import { environment } from '../utils'

import commonConstants from './common'

const envSpecificConstants = {
    US: {
        TEST_COURSES: {
            COURSE_WITH_CLASSROOM: '017278',
            COURSE_WITH_OPTIONAL_CONTENT: '478112',
            COURSE_WITH_OPTIONAL_CONTENT_ONLY: '212234',
            COURSE_WITH_REQUIRED_ITEMS: '500475',
        },
        ACCESS_KEY_FOR_CLASSROOM: 'ushigpihxussap',
        ACCESS_KEY_FOR_CONTENT: 'usabgorgugqilj',
        ACCESS_KEY_FOR_CONTENT_INPUT_ID: 'input-US-828',
    },
    CA: {
        TEST_COURSES: {
            COURSE_WITH_CLASSROOM: '498350',
            COURSE_WITH_OPTIONAL_CONTENT: '035067',
            COURSE_WITH_OPTIONAL_CONTENT_ONLY: '817401',
            COURSE_WITH_REQUIRED_ITEMS: '506134',
        },
        ACCESS_KEY_FOR_CLASSROOM: 'cszunjervekjof',
        ACCESS_KEY_FOR_CONTENT: 'usetzirvachanr',
        ACCESS_KEY_FOR_CONTENT_INPUT_ID: 'input-CA-7',
    },
    STAGING: {
        TEST_COURSES: {
            COURSE_WITH_CLASSROOM: '281762',
            COURSE_WITH_OPTIONAL_CONTENT: '710364',
            COURSE_WITH_OPTIONAL_CONTENT_ONLY: '845722',
            COURSE_WITH_REQUIRED_ITEMS: '158047',
            COURSE_WITH_PROCTORIO_1: '375007',
            COURSE_WITH_PROCTORIO_2: '508164',
        },
        ACCESS_KEY_FOR_CLASSROOM: 'usgarlitpemfux',
        ACCESS_KEY_FOR_CONTENT: 'usosduvsecxufm',
        ACCESS_KEY_FOR_CONTENT_INPUT_ID: 'input-STAGING-797',
    },
}

const billingConstants = {
    ...commonConstants,
    ...(environment === 'LOCAL'
        ? undefined
        : envSpecificConstants[environment]),
}

const getCreditCardInfo = async () => {
    if (environment === 'US' || environment === 'CA') {
        Object.assign(
            billingConstants.creditCardInfo,
            await secrets.getSecretValue(
                commonConstants.CREDIT_CARD_SECRET_KEY,
            ),
        )
    }
}

/*
 * FIXME: There is a race condition here. If the constants are accessed before
 * the promise is resolved, the credit card info will be incorrect.
 */
getCreditCardInfo()

export type BillingEnvironmentConstants = typeof envSpecificConstants

export default billingConstants
