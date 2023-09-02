import { APIGatewayProxyEvent } from "aws-lambda";

export const baseSearchEvent: Partial<APIGatewayProxyEvent> = {
  httpMethod: 'get',
  body: '',
  headers: {},
  isBase64Encoded: false,
  multiValueHeaders: {},
  multiValueQueryStringParameters: {},
  path: '/search',
  pathParameters: {},
  queryStringParameters: { q: 'eminem' },
  resource: '',
  stageVariables: {},
}

export const baseGetArtistEvent: Partial<APIGatewayProxyEvent> = {
  httpMethod: 'get',
  body: '',
  headers: {},
  isBase64Encoded: false,
  multiValueHeaders: {},
  multiValueQueryStringParameters: {},
  path: '/artist/{id}',
  pathParameters: { id: '13' },
  queryStringParameters: {},
  resource: '',
  stageVariables: {},
}

export const baseGetAlbumsEvent: Partial<APIGatewayProxyEvent> = {
  httpMethod: 'get',
  body: '',
  headers: {},
  isBase64Encoded: false,
  multiValueHeaders: {},
  multiValueQueryStringParameters: {},
  path: '/artist/{id}/albums',
  pathParameters: { id: '13' },
  queryStringParameters: {},
  resource: '',
  stageVariables: {},
}

export const baseGetTopTracksEvent: Partial<APIGatewayProxyEvent> = {
  httpMethod: 'get',
  body: '',
  headers: {},
  isBase64Encoded: false,
  multiValueHeaders: {},
  multiValueQueryStringParameters: {},
  path: '/artist/{id}/top',
  pathParameters: { id: '13' },
  queryStringParameters: {},
  resource: '',
  stageVariables: {},
}
