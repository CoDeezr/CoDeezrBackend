import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { deezerClient } from './client/deezer-client';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const { id } = event.pathParameters ?? {};

        if (!id)
            return {
                statusCode: 400,
                body: JSON.stringify({ wsMessage: 'Artist ID is required' })
            }

        const res = await deezerClient.get(`/artist/${id}/top`);
        const { data } = res;

        return {
            statusCode: 200,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ wsMessage: 'Server error' }),
        };
    }
};
