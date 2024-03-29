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
 * @interface ChannelSettingsTemplatePropertiesRoomTypesInner
 */
export interface ChannelSettingsTemplatePropertiesRoomTypesInner {
    /**
     * 
     * @type {number}
     * @memberof ChannelSettingsTemplatePropertiesRoomTypesInner
     */
    id?: number;
}

/**
 * Check if a given object implements the ChannelSettingsTemplatePropertiesRoomTypesInner interface.
 */
export function instanceOfChannelSettingsTemplatePropertiesRoomTypesInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelSettingsTemplatePropertiesRoomTypesInnerFromJSON(json: any): ChannelSettingsTemplatePropertiesRoomTypesInner {
    return ChannelSettingsTemplatePropertiesRoomTypesInnerFromJSONTyped(json, false);
}

export function ChannelSettingsTemplatePropertiesRoomTypesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelSettingsTemplatePropertiesRoomTypesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function ChannelSettingsTemplatePropertiesRoomTypesInnerToJSON(value?: ChannelSettingsTemplatePropertiesRoomTypesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}

