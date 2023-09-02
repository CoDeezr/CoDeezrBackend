import { APIGatewayProxyResult } from 'aws-lambda';
import { lambdaHandler } from '../src/get-artist';
import { expect, describe, it } from '@jest/globals';
import { baseGetArtistEvent } from './_base_events'

describe('Unit test for get-artist handler', function () {

    it('should have 200 OK response', async () => {
        const event = baseGetArtistEvent;
        const result: APIGatewayProxyResult = await lambdaHandler(event as any);
        expect(result.statusCode).toEqual(200);
    });

    it('should contain property data of type Number', async () => {
        const event = baseGetArtistEvent;
        const result: APIGatewayProxyResult = await lambdaHandler(event as any);
        const content = JSON.parse(result.body);
        expect(content).toHaveProperty('id');
        expect(content.id.toString()).toEqual(event.pathParameters!.id);
    });
});
