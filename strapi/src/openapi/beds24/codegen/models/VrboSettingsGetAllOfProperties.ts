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
import type { VrboSettingsGetAllOfPropertiesRoomTypes } from './VrboSettingsGetAllOfPropertiesRoomTypes';
import {
    VrboSettingsGetAllOfPropertiesRoomTypesFromJSON,
    VrboSettingsGetAllOfPropertiesRoomTypesFromJSONTyped,
    VrboSettingsGetAllOfPropertiesRoomTypesToJSON,
} from './VrboSettingsGetAllOfPropertiesRoomTypes';

/**
 * 
 * @export
 * @interface VrboSettingsGetAllOfProperties
 */
export interface VrboSettingsGetAllOfProperties {
    /**
     * 
     * @type {number}
     * @memberof VrboSettingsGetAllOfProperties
     */
    id?: number;
    /**
     * 
     * @type {Array<VrboSettingsGetAllOfPropertiesRoomTypes>}
     * @memberof VrboSettingsGetAllOfProperties
     */
    roomTypes?: Array<VrboSettingsGetAllOfPropertiesRoomTypes>;
}

/**
 * Check if a given object implements the VrboSettingsGetAllOfProperties interface.
 */
export function instanceOfVrboSettingsGetAllOfProperties(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VrboSettingsGetAllOfPropertiesFromJSON(json: any): VrboSettingsGetAllOfProperties {
    return VrboSettingsGetAllOfPropertiesFromJSONTyped(json, false);
}

export function VrboSettingsGetAllOfPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): VrboSettingsGetAllOfProperties {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'roomTypes': !exists(json, 'roomTypes') ? undefined : ((json['roomTypes'] as Array<any>).map(VrboSettingsGetAllOfPropertiesRoomTypesFromJSON)),
    };
}

export function VrboSettingsGetAllOfPropertiesToJSON(value?: VrboSettingsGetAllOfProperties | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'roomTypes': value.roomTypes === undefined ? undefined : ((value.roomTypes as Array<any>).map(VrboSettingsGetAllOfPropertiesRoomTypesToJSON)),
    };
}

