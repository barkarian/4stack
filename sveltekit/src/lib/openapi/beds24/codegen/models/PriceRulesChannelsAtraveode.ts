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
 * @interface PriceRulesChannelsAtraveode
 */
export interface PriceRulesChannelsAtraveode {
    /**
     * 
     * @type {boolean}
     * @memberof PriceRulesChannelsAtraveode
     */
    enabled?: boolean;
}

/**
 * Check if a given object implements the PriceRulesChannelsAtraveode interface.
 */
export function instanceOfPriceRulesChannelsAtraveode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PriceRulesChannelsAtraveodeFromJSON(json: any): PriceRulesChannelsAtraveode {
    return PriceRulesChannelsAtraveodeFromJSONTyped(json, false);
}

export function PriceRulesChannelsAtraveodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceRulesChannelsAtraveode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
    };
}

export function PriceRulesChannelsAtraveodeToJSON(value?: PriceRulesChannelsAtraveode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
    };
}

