import { APIGatewayProxyResult, APIGatewayProxyEvent } from 'aws-lambda';

export class MicropubProcessor {
    public process(event: APIGatewayProxyEvent): APIGatewayProxyResult {
        return {
            statusCode: 200,
            body: JSON.stringify(
                {
                    message: 'Thanks for calling the MicropubProcessor process method.',
                    input: event,
                },
                null,
                2,
            ),
        };
    }
}
