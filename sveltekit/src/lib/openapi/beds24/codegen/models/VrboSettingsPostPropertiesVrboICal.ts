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
 * @interface VrboSettingsPostPropertiesVrboICal
 */
export interface VrboSettingsPostPropertiesVrboICal {
    /**
     * 
     * @type {boolean}
     * @memberof VrboSettingsPostPropertiesVrboICal
     */
    importBookingRequests?: boolean;
}

/**
 * Check if a given object implements the VrboSettingsPostPropertiesVrboICal interface.
 */
export function instanceOfVrboSettingsPostPropertiesVrboICal(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VrboSettingsPostPropertiesVrboICalFromJSON(json: any): VrboSettingsPostPropertiesVrboICal {
    return VrboSettingsPostPropertiesVrboICalFromJSONTyped(json, false);
}

export function VrboSettingsPostPropertiesVrboICalFromJSONTyped(json: any, ignoreDiscriminator: boolean): VrboSettingsPostPropertiesVrboICal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'importBookingRequests': !exists(json, 'importBookingRequests') ? undefined : json['importBookingRequests'],
    };
}

export function VrboSettingsPostPropertiesVrboICalToJSON(value?: VrboSettingsPostPropertiesVrboICal | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'importBookingRequests': value.importBookingRequests,
    };
}

