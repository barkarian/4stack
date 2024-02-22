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
 * @interface ICalExportSettingsGetAllOfRoomTypes
 */
export interface ICalExportSettingsGetAllOfRoomTypes {
    /**
     * 
     * @type {string}
     * @memberof ICalExportSettingsGetAllOfRoomTypes
     */
    iCalUri?: string;
    /**
     * 
     * @type {string}
     * @memberof ICalExportSettingsGetAllOfRoomTypes
     */
    propertyDescriptionICalUri?: string;
    /**
     * 
     * @type {string}
     * @memberof ICalExportSettingsGetAllOfRoomTypes
     */
    roomDescriptionICalUri?: string;
    /**
     * 
     * @type {string}
     * @memberof ICalExportSettingsGetAllOfRoomTypes
     */
    propertyAndRoomDescriptionICalUri?: string;
}

/**
 * Check if a given object implements the ICalExportSettingsGetAllOfRoomTypes interface.
 */
export function instanceOfICalExportSettingsGetAllOfRoomTypes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ICalExportSettingsGetAllOfRoomTypesFromJSON(json: any): ICalExportSettingsGetAllOfRoomTypes {
    return ICalExportSettingsGetAllOfRoomTypesFromJSONTyped(json, false);
}

export function ICalExportSettingsGetAllOfRoomTypesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ICalExportSettingsGetAllOfRoomTypes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'iCalUri': !exists(json, 'iCalUri') ? undefined : json['iCalUri'],
        'propertyDescriptionICalUri': !exists(json, 'propertyDescriptionICalUri') ? undefined : json['propertyDescriptionICalUri'],
        'roomDescriptionICalUri': !exists(json, 'roomDescriptionICalUri') ? undefined : json['roomDescriptionICalUri'],
        'propertyAndRoomDescriptionICalUri': !exists(json, 'propertyAndRoomDescriptionICalUri') ? undefined : json['propertyAndRoomDescriptionICalUri'],
    };
}

export function ICalExportSettingsGetAllOfRoomTypesToJSON(value?: ICalExportSettingsGetAllOfRoomTypes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'iCalUri': value.iCalUri,
        'propertyDescriptionICalUri': value.propertyDescriptionICalUri,
        'roomDescriptionICalUri': value.roomDescriptionICalUri,
        'propertyAndRoomDescriptionICalUri': value.propertyAndRoomDescriptionICalUri,
    };
}

