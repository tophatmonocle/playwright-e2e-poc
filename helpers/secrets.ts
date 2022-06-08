// Helpers in relation to dealing with Attachments

import SecretsManager = require("aws-sdk/clients/secretsmanager");

/*
 * Retrieves a secret from Secrets Manager
 *
 * EX)
 * secrets.getSecretValue("this/is/my/secret/key")
 *
 */
export async function getSecretValue<R = any>(secretKey: string) {
    const secretsmanager = new SecretsManager()

    const params = {
        SecretId: secretKey,
    }
    const result = await secretsmanager.getSecretValue(params).promise()
    if (result.SecretString === undefined) {
        throw new Error('Failure retrieving secret.')
    }
    return JSON.parse(result.SecretString) as R
}

export default {
    getSecretValue,
}
