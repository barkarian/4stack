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
 * @interface PropertyBookingRulesAllowGuestCancellation
 */
export interface PropertyBookingRulesAllowGuestCancellation {
    /**
     * 
     * @type {string}
     * @memberof PropertyBookingRulesAllowGuestCancellation
     */
    type?: PropertyBookingRulesAllowGuestCancellationTypeEnum;
    /**
     * Used to specify the number of days if type is set to daysBeforeArrival
     * @type {number}
     * @memberof PropertyBookingRulesAllowGuestCancellation
     */
    daysBeforeArrivalValue?: number | null;
}


/**
 * @export
 */
export const PropertyBookingRulesAllowGuestCancellationTypeEnum = {
    Always: 'always',
    Never: 'never',
    DaysBeforeArrival: 'daysBeforeArrival'
} as const;
export type PropertyBookingRulesAllowGuestCancellationTypeEnum = typeof PropertyBookingRulesAllowGuestCancellationTypeEnum[keyof typeof PropertyBookingRulesAllowGuestCancellationTypeEnum];


/**
 * Check if a given object implements the PropertyBookingRulesAllowGuestCancellation interface.
 */
export function instanceOfPropertyBookingRulesAllowGuestCancellation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PropertyBookingRulesAllowGuestCancellationFromJSON(json: any): PropertyBookingRulesAllowGuestCancellation {
    return PropertyBookingRulesAllowGuestCancellationFromJSONTyped(json, false);
}

export function PropertyBookingRulesAllowGuestCancellationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyBookingRulesAllowGuestCancellation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'daysBeforeArrivalValue': !exists(json, 'daysBeforeArrivalValue') ? undefined : json['daysBeforeArrivalValue'],
    };
}

export function PropertyBookingRulesAllowGuestCancellationToJSON(value?: PropertyBookingRulesAllowGuestCancellation | null): any {
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

