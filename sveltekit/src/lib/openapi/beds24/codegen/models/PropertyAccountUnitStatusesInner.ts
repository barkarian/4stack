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
 * @interface PropertyAccountUnitStatusesInner
 */
export interface PropertyAccountUnitStatusesInner {
    /**
     * 
     * @type {string}
     * @memberof PropertyAccountUnitStatusesInner
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof PropertyAccountUnitStatusesInner
     */
    color?: string;
}

/**
 * Check if a given object implements the PropertyAccountUnitStatusesInner interface.
 */
export function instanceOfPropertyAccountUnitStatusesInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PropertyAccountUnitStatusesInnerFromJSON(json: any): PropertyAccountUnitStatusesInner {
    return PropertyAccountUnitStatusesInnerFromJSONTyped(json, false);
}

export function PropertyAccountUnitStatusesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyAccountUnitStatusesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'text': !exists(json, 'text') ? undefined : json['text'],
        'color': !exists(json, 'color') ? undefined : json['color'],
    };
}

export function PropertyAccountUnitStatusesInnerToJSON(value?: PropertyAccountUnitStatusesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'text': value.text,
        'color': value.color,
    };
}

