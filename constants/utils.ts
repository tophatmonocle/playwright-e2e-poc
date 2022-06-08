type Environment = 'US' | 'CA' | 'STAGING' | 'LOCAL'

const enhancedGlobal: typeof globalThis & {
    SANITY_VARIABLES?: { APP_ENV?: Environment }
} = globalThis

export const environment = (() => {
    const env =
        process.env.APP_ENV ||
        enhancedGlobal.SANITY_VARIABLES?.APP_ENV ||
        'LOCAL'
    if (!['US', 'CA', 'STAGING', 'LOCAL'].includes(env))
        throw new Error(`Unknown environment '${env}'`)
    return env as Environment
})()
