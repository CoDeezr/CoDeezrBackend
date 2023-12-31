import { APIGatewayProxyResult } from 'aws-lambda';
import { lambdaHandler } from '../src/search';
import { expect, describe, it } from '@jest/globals';
import { baseSearchEvent } from './_base_events'

describe('Unit test for search handler', function () {

    it('should have 200 OK response', async () => {
        const event = baseSearchEvent;
        const result: APIGatewayProxyResult = await lambdaHandler(event as any);
        expect(result.statusCode).toEqual(200);
    });

    it('should have 400 bad request, when query param q is missing', async () => {
        const event = structuredClone(baseSearchEvent);
        event.queryStringParameters!.q = undefined
        const result: APIGatewayProxyResult = await lambdaHandler(event as any);
        expect(result.statusCode).toEqual(400);
    });

    it('should contain property data of type Array', async () => {
        const event = baseSearchEvent;
        const result: APIGatewayProxyResult = await lambdaHandler(event as any);
        const content = JSON.parse(result.body);
        expect(content).toHaveProperty('data');
        expect(content.data).toBeInstanceOf(Array);
    });
});
