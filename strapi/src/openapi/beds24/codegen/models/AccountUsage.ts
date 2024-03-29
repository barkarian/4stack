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
 * @interface AccountUsage
 */
export interface AccountUsage {
    /**
     * 
     * @type {number}
     * @memberof AccountUsage
     */
    numProperties?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountUsage
     */
    numRooms?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountUsage
     */
    numActivities?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountUsage
     */
    numLinks?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountUsage
     */
    privateDomain?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof AccountUsage
     */
    charges?: Array<object>;
}

/**
 * Check if a given object implements the AccountUsage interface.
 */
export function instanceOfAccountUsage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountUsageFromJSON(json: any): AccountUsage {
    return AccountUsageFromJSONTyped(json, false);
}

export function AccountUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountUsage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'numProperties': !exists(json, 'numProperties') ? undefined : json['numProperties'],
        'numRooms': !exists(json, 'numRooms') ? undefined : json['numRooms'],
        'numActivities': !exists(json, 'numActivities') ? undefined : json['numActivities'],
        'numLinks': !exists(json, 'numLinks') ? undefined : json['numLinks'],
        'privateDomain': !exists(json, 'privateDomain') ? undefined : json['privateDomain'],
        'charges': !exists(json, 'charges') ? undefined : json['charges'],
    };
}

export function AccountUsageToJSON(value?: AccountUsage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'numProperties': value.numProperties,
        'numRooms': value.numRooms,
        'numActivities': value.numActivities,
        'numLinks': value.numLinks,
        'privateDomain': value.privateDomain,
        'charges': value.charges,
    };
}

