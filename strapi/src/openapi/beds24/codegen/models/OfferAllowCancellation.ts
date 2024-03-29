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
 * @interface OfferAllowCancellation
 */
export interface OfferAllowCancellation {
    /**
     * 
     * @type {string}
     * @memberof OfferAllowCancellation
     */
    type?: OfferAllowCancellationTypeEnum;
    /**
     * Used to specify the number of days if type is set to daysBeforeArrival
     * @type {number}
     * @memberof OfferAllowCancellation
     */
    daysBeforeArrivalValue?: number | null;
}


/**
 * @export
 */
export const OfferAllowCancellationTypeEnum = {
    DaysBeforeArrival: 'daysBeforeArrival',
    PropertyRule: 'propertyRule',
    Always: 'always',
    Never: 'never'
} as const;
export type OfferAllowCancellationTypeEnum = typeof OfferAllowCancellationTypeEnum[keyof typeof OfferAllowCancellationTypeEnum];


/**
 * Check if a given object implements the OfferAllowCancellation interface.
 */
export function instanceOfOfferAllowCancellation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OfferAllowCancellationFromJSON(json: any): OfferAllowCancellation {
    return OfferAllowCancellationFromJSONTyped(json, false);
}

export function OfferAllowCancellationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OfferAllowCancellation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'daysBeforeArrivalValue': !exists(json, 'daysBeforeArrivalValue') ? undefined : json['daysBeforeArrivalValue'],
    };
}

export function OfferAllowCancellationToJSON(value?: OfferAllowCancellation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'daysBeforeArrivalValue': value.daysBeforeArrivalValue,
    };
}

