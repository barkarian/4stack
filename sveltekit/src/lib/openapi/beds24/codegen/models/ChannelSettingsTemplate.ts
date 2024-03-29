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
import type { ChannelSettingsTemplateProperties } from './ChannelSettingsTemplateProperties';
import {
    ChannelSettingsTemplatePropertiesFromJSON,
    ChannelSettingsTemplatePropertiesFromJSONTyped,
    ChannelSettingsTemplatePropertiesToJSON,
} from './ChannelSettingsTemplateProperties';

/**
 * 
 * @export
 * @interface ChannelSettingsTemplate
 */
export interface ChannelSettingsTemplate {
    /**
     * 
     * @type {string}
     * @memberof ChannelSettingsTemplate
     */
    channel?: string;
    /**
     * 
     * @type {ChannelSettingsTemplateProperties}
     * @memberof ChannelSettingsTemplate
     */
    properties?: ChannelSettingsTemplateProperties;
}

/**
 * Check if a given object implements the ChannelSettingsTemplate interface.
 */
export function instanceOfChannelSettingsTemplate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelSettingsTemplateFromJSON(json: any): ChannelSettingsTemplate {
    return ChannelSettingsTemplateFromJSONTyped(json, false);
}

export function ChannelSettingsTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelSettingsTemplate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'properties': !exists(json, 'properties') ? undefined : ChannelSettingsTemplatePropertiesFromJSON(json['properties']),
    };
}

export function ChannelSettingsTemplateToJSON(value?: ChannelSettingsTemplate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel': value.channel,
        'properties': ChannelSettingsTemplatePropertiesToJSON(value.properties),
    };
}

