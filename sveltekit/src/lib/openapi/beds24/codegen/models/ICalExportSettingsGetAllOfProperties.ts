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
import type { ICalExportSettingsGetAllOfRoomTypes } from './ICalExportSettingsGetAllOfRoomTypes';
import {
    ICalExportSettingsGetAllOfRoomTypesFromJSON,
    ICalExportSettingsGetAllOfRoomTypesFromJSONTyped,
    ICalExportSettingsGetAllOfRoomTypesToJSON,
} from './ICalExportSettingsGetAllOfRoomTypes';

/**
 * 
 * @export
 * @interface ICalExportSettingsGetAllOfProperties
 */
export interface ICalExportSettingsGetAllOfProperties {
    /**
     * 
     * @type {Array<ICalExportSettingsGetAllOfRoomTypes>}
     * @memberof ICalExportSettingsGetAllOfProperties
     */
    roomTypes?: Array<ICalExportSettingsGetAllOfRoomTypes>;
}

/**
 * Check if a given object implements the ICalExportSettingsGetAllOfProperties interface.
 */
export function instanceOfICalExportSettingsGetAllOfProperties(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ICalExportSettingsGetAllOfPropertiesFromJSON(json: any): ICalExportSettingsGetAllOfProperties {
    return ICalExportSettingsGetAllOfPropertiesFromJSONTyped(json, false);
}

export function ICalExportSettingsGetAllOfPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ICalExportSettingsGetAllOfProperties {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roomTypes': !exists(json, 'roomTypes') ? undefined : ((json['roomTypes'] as Array<any>).map(ICalExportSettingsGetAllOfRoomTypesFromJSON)),
    };
}

export function ICalExportSettingsGetAllOfPropertiesToJSON(value?: ICalExportSettingsGetAllOfProperties | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roomTypes': value.roomTypes === undefined ? undefined : ((value.roomTypes as Array<any>).map(ICalExportSettingsGetAllOfRoomTypesToJSON)),
    };
}

