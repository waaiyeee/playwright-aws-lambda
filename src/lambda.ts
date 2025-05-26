import { APIGatewayProxyResult, EventBridgeEvent, Handler } from 'aws-lambda';
import { main } from './shared';

let args = [
  '--autoplay-policy=user-gesture-required',
  '--disable-background-networking',
  // More flags configured, see below
];

export const handler: Handler = async (
  event: EventBridgeEvent<'Location Geofence Event', GeofenceType>,
  context
): Promise<APIGatewayProxyResult> => {
  const results = await main({
    args,
    headless: true,
  });
};