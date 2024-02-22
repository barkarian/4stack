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
import type { ICalExportSettingsPostPropertiesInnerRoomTypesInner } from './ICalExportSettingsPostPropertiesInnerRoomTypesInner';
import {
    ICalExportSettingsPostPropertiesInnerRoomTypesInnerFromJSON,
    ICalExportSettingsPostPropertiesInnerRoomTypesInnerFromJSONTyped,
    ICalExportSettingsPostPropertiesInnerRoomTypesInnerToJSON,
} from './ICalExportSettingsPostPropertiesInnerRoomTypesInner';

/**
 * 
 * @export
 * @interface ICalExportSettingsPostPropertiesInner
 */
export interface ICalExportSettingsPostPropertiesInner {
    /**
     * 
     * @type {number}
     * @memberof ICalExportSettingsPostPropertiesInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ICalExportSettingsPostPropertiesInner
     */
    seed?: string;
    /**
     * 
     * @type {string}
     * @memberof ICalExportSettingsPostPropertiesInner
     */
    iCalSumamry?: string;
    /**
     * 
     * @type {string}
     * @memberof ICalExportSettingsPostPropertiesInner
     */
    iCalPropertyDescription?: string;
    /**
     * 
     * @type {Array<ICalExportSettingsPostPropertiesInnerRoomTypesInner>}
     * @memberof ICalExportSettingsPostPropertiesInner
     */
    roomTypes?: Array<ICalExportSettingsPostPropertiesInnerRoomTypesInner>;
}

/**
 * Check if a given object implements the ICalExportSettingsPostPropertiesInner interface.
 */
export function instanceOfICalExportSettingsPostPropertiesInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ICalExportSettingsPostPropertiesInnerFromJSON(json: any): ICalExportSettingsPostPropertiesInner {
    return ICalExportSettingsPostPropertiesInnerFromJSONTyped(json, false);
}

export function ICalExportSettingsPostPropertiesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ICalExportSettingsPostPropertiesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'seed': !exists(json, 'seed') ? undefined : json['seed'],
        'iCalSumamry': !exists(json, 'iCalSumamry') ? undefined : json['iCalSumamry'],
        'iCalPropertyDescription': !exists(json, 'iCalPropertyDescription') ? undefined : json['iCalPropertyDescription'],
        'roomTypes': !exists(json, 'roomTypes') ? undefined : ((json['roomTypes'] as Array<any>).map(ICalExportSettingsPostPropertiesInnerRoomTypesInnerFromJSON)),
    };
}

export function ICalExportSettingsPostPropertiesInnerToJSON(value?: ICalExportSettingsPostPropertiesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'seed': value.seed,
        'iCalSumamry': value.iCalSumamry,
        'iCalPropertyDescription': value.iCalPropertyDescription,
        'roomTypes': value.roomTypes === undefined ? undefined : ((value.roomTypes as Array<any>).map(ICalExportSettingsPostPropertiesInnerRoomTypesInnerToJSON)),
    };
}
