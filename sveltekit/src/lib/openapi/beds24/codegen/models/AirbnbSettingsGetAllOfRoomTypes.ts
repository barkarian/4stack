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
/**
 * 
 * @export
 * @interface AirbnbSettingsGetAllOfRoomTypes
 */
export interface AirbnbSettingsGetAllOfRoomTypes {
    /**
     * 
     * @type {number}
     * @memberof AirbnbSettingsGetAllOfRoomTypes
     */
    airbnbListingId?: number;
    /**
     * 
     * @type {string}
     * @memberof AirbnbSettingsGetAllOfRoomTypes
     */
    syncType?: AirbnbSettingsGetAllOfRoomTypesSyncTypeEnum;
}


/**
 * @export
 */
export const AirbnbSettingsGetAllOfRoomTypesSyncTypeEnum = {
    PricesAndAvailability: 'pricesAndAvailability',
    Everything: 'everything'
} as const;
export type AirbnbSettingsGetAllOfRoomTypesSyncTypeEnum = typeof AirbnbSettingsGetAllOfRoomTypesSyncTypeEnum[keyof typeof AirbnbSettingsGetAllOfRoomTypesSyncTypeEnum];


/**
 * Check if a given object implements the AirbnbSettingsGetAllOfRoomTypes interface.
 */
export function instanceOfAirbnbSettingsGetAllOfRoomTypes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AirbnbSettingsGetAllOfRoomTypesFromJSON(json: any): AirbnbSettingsGetAllOfRoomTypes {
    return AirbnbSettingsGetAllOfRoomTypesFromJSONTyped(json, false);
}

export function AirbnbSettingsGetAllOfRoomTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AirbnbSettingsGetAllOfRoomTypes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'airbnbListingId': !exists(json, 'airbnbListingId') ? undefined : json['airbnbListingId'],
        'syncType': !exists(json, 'syncType') ? undefined : json['syncType'],
    };
}

export function AirbnbSettingsGetAllOfRoomTypesToJSON(value?: AirbnbSettingsGetAllOfRoomTypes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'airbnbListingId': value.airbnbListingId,
        'syncType': value.syncType,
    };
}

