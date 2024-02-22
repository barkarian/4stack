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
import type { AirbnbSettingsGetAllOfRoomTypes } from './AirbnbSettingsGetAllOfRoomTypes';
import {
    AirbnbSettingsGetAllOfRoomTypesFromJSON,
    AirbnbSettingsGetAllOfRoomTypesFromJSONTyped,
    AirbnbSettingsGetAllOfRoomTypesToJSON,
} from './AirbnbSettingsGetAllOfRoomTypes';

/**
 * 
 * @export
 * @interface AirbnbSettingsGetAllOfProperties1
 */
export interface AirbnbSettingsGetAllOfProperties1 {
    /**
     * 
     * @type {number}
     * @memberof AirbnbSettingsGetAllOfProperties1
     */
    id?: number;
    /**
     * 
     * @type {Array<AirbnbSettingsGetAllOfRoomTypes>}
     * @memberof AirbnbSettingsGetAllOfProperties1
     */
    roomTypes?: Array<AirbnbSettingsGetAllOfRoomTypes>;
}

/**
 * Check if a given object implements the AirbnbSettingsGetAllOfProperties1 interface.
 */
export function instanceOfAirbnbSettingsGetAllOfProperties1(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AirbnbSettingsGetAllOfProperties1FromJSON(json: any): AirbnbSettingsGetAllOfProperties1 {
    return AirbnbSettingsGetAllOfProperties1FromJSONTyped(json, false);
}

export function AirbnbSettingsGetAllOfProperties1FromJSONTyped(json: any, ignoreDiscriminator: boolean): AirbnbSettingsGetAllOfProperties1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'roomTypes': !exists(json, 'roomTypes') ? undefined : ((json['roomTypes'] as Array<any>).map(AirbnbSettingsGetAllOfRoomTypesFromJSON)),
    };
}

export function AirbnbSettingsGetAllOfProperties1ToJSON(value?: AirbnbSettingsGetAllOfProperties1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'roomTypes': value.roomTypes === undefined ? undefined : ((value.roomTypes as Array<any>).map(AirbnbSettingsGetAllOfRoomTypesToJSON)),
    };
}
