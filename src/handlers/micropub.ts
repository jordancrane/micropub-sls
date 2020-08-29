import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { MicropubProcessor } from '../processors/MicropubProcessor';

const micropubProcessor = new MicropubProcessor();

export const handler: APIGatewayProxyHandler = async (event, _context) => {
    return micropubProcessor.process(event);
};
