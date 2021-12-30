var format = require('./format-phone-number.js')
let response

/**
 * Interface for AWS Lambda invocations.
 * 
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    try {
        const input = event.queryStringParameters.PHONE
        // const ret = await axios(url);
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: format(input),
            })
        }
    } catch (err) {
        response = {
            'statusCode': 500, // There is probably a better error code to be used here...
            'body': JSON.stringify({
                error: err.message,
            })
        }
    }

    return response
}
