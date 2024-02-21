/* tslint:disable */
/* eslint-disable */
/**
 * API V2
 * For more information see [wiki.beds24.com/index.php/API_V2.0](https://wiki.beds24.com/index.php/API_V2.0)
 *
 * The version of the OpenAPI document: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChannelsAirbnbUsersGet200ResponseAllOfDataInnerAirbnbUser } from './ChannelsAirbnbUsersGet200ResponseAllOfDataInnerAirbnbUser';
import {
    ChannelsAirbnbUsersGet200ResponseAllOfDataInnerAirbnbUserFromJSON,
    ChannelsAirbnbUsersGet200ResponseAllOfDataInnerAirbnbUserFromJSONTyped,
    ChannelsAirbnbUsersGet200ResponseAllOfDataInnerAirbnbUserToJSON,
} from './ChannelsAirbnbUsersGet200ResponseAllOfDataInnerAirbnbUser';

/**
 * 
 * @export
 * @interface ChannelsAirbnbUsersGet200ResponseAllOfDataInner
 */
export interface ChannelsAirbnbUsersGet200ResponseAllOfDataInner {
    /**
     * 
     * @type {ChannelsAirbnbUsersGet200ResponseAllOfDataInnerAirbnbUser}
     * @memberof ChannelsAirbnbUsersGet200ResponseAllOfDataInner
     */
    airbnbUser?: ChannelsAirbnbUsersGet200ResponseAllOfDataInnerAirbnbUser;
}

/**
 * Check if a given object implements the ChannelsAirbnbUsersGet200ResponseAllOfDataInner interface.
 */
export function instanceOfChannelsAirbnbUsersGet200ResponseAllOfDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelsAirbnbUsersGet200ResponseAllOfDataInnerFromJSON(json: any): ChannelsAirbnbUsersGet200ResponseAllOfDataInner {
    return ChannelsAirbnbUsersGet200ResponseAllOfDataInnerFromJSONTyped(json, false);
}

export function ChannelsAirbnbUsersGet200ResponseAllOfDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelsAirbnbUsersGet200ResponseAllOfDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'airbnbUser': !exists(json, 'airbnbUser') ? undefined : ChannelsAirbnbUsersGet200ResponseAllOfDataInnerAirbnbUserFromJSON(json['airbnbUser']),
    };
}

export function ChannelsAirbnbUsersGet200ResponseAllOfDataInnerToJSON(value?: ChannelsAirbnbUsersGet200ResponseAllOfDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'airbnbUser': ChannelsAirbnbUsersGet200ResponseAllOfDataInnerAirbnbUserToJSON(value.airbnbUser),
    };
}

