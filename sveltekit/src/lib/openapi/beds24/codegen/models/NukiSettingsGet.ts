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
import type { NukiSettingsGetProperties } from './NukiSettingsGetProperties';
import {
    NukiSettingsGetPropertiesFromJSON,
    NukiSettingsGetPropertiesFromJSONTyped,
    NukiSettingsGetPropertiesToJSON,
} from './NukiSettingsGetProperties';

/**
 * 
 * @export
 * @interface NukiSettingsGet
 */
export interface NukiSettingsGet {
    /**
     * 
     * @type {string}
     * @memberof NukiSettingsGet
     */
    channel?: string;
    /**
     * 
     * @type {NukiSettingsGetProperties}
     * @memberof NukiSettingsGet
     */
    properties?: NukiSettingsGetProperties;
}

/**
 * Check if a given object implements the NukiSettingsGet interface.
 */
export function instanceOfNukiSettingsGet(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NukiSettingsGetFromJSON(json: any): NukiSettingsGet {
    return NukiSettingsGetFromJSONTyped(json, false);
}

export function NukiSettingsGetFromJSONTyped(json: any, ignoreDiscriminator: boolean): NukiSettingsGet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'properties': !exists(json, 'properties') ? undefined : NukiSettingsGetPropertiesFromJSON(json['properties']),
    };
}

export function NukiSettingsGetToJSON(value?: NukiSettingsGet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel': value.channel,
        'properties': NukiSettingsGetPropertiesToJSON(value.properties),
    };
}

