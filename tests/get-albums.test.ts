import { APIGatewayProxyResult } from 'aws-lambda';
import { lambdaHandler } from '../src/get-albums';
import { expect, describe, it } from '@jest/globals';
import { baseGetAlbumsEvent } from './_base_events'

describe('Unit test for get-albums handler', function () {

    it('should have 200 OK response', async () => {
        const event = baseGetAlbumsEvent;
        const result: APIGatewayProxyResult = await lambdaHandler(event as any);
        expect(result.statusCode).toEqual(200);
    });

    it('should contain property data of type Array', async () => {
        const event = baseGetAlbumsEvent;
        const result: APIGatewayProxyResult = await lambdaHandler(event as any);
        const content = JSON.parse(result.body);
        expect(content).toHaveProperty('data');
        expect(content.data).toBeInstanceOf(Array);
    });
});
