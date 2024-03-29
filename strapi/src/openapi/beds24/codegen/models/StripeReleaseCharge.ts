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
 * @interface StripeReleaseCharge
 */
export interface StripeReleaseCharge {
    /**
     * 
     * @type {string}
     * @memberof StripeReleaseCharge
     */
    action?: string;
    /**
     * 
     * @type {number}
     * @memberof StripeReleaseCharge
     */
    bookingId?: number;
    /**
     * 
     * @type {string}
     * @memberof StripeReleaseCharge
     */
    stripeChargeId?: string;
}

/**
 * Check if a given object implements the StripeReleaseCharge interface.
 */
export function instanceOfStripeReleaseCharge(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StripeReleaseChargeFromJSON(json: any): StripeReleaseCharge {
    return StripeReleaseChargeFromJSONTyped(json, false);
}

export function StripeReleaseChargeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeReleaseCharge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : json['action'],
        'bookingId': !exists(json, 'bookingId') ? undefined : json['bookingId'],
        'stripeChargeId': !exists(json, 'stripeChargeId') ? undefined : json['stripeChargeId'],
    };
}

export function StripeReleaseChargeToJSON(value?: StripeReleaseCharge | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'bookingId': value.bookingId,
        'stripeChargeId': value.stripeChargeId,
    };
}

