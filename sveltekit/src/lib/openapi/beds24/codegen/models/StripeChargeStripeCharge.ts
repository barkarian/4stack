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
import type { StripePaymentMethodStripePaymentMethodBillingDetails } from './StripePaymentMethodStripePaymentMethodBillingDetails';
import {
    StripePaymentMethodStripePaymentMethodBillingDetailsFromJSON,
    StripePaymentMethodStripePaymentMethodBillingDetailsFromJSONTyped,
    StripePaymentMethodStripePaymentMethodBillingDetailsToJSON,
} from './StripePaymentMethodStripePaymentMethodBillingDetails';

/**
 * This object will contain other fields not specified here.
 * @export
 * @interface StripeChargeStripeCharge
 */
export interface StripeChargeStripeCharge {
    /**
     * 
     * @type {string}
     * @memberof StripeChargeStripeCharge
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeChargeStripeCharge
     */
    object?: string;
    /**
     * 
     * @type {number}
     * @memberof StripeChargeStripeCharge
     */
    amount?: number;
    /**
     * 
     * @type {number}
     * @memberof StripeChargeStripeCharge
     */
    amountCaptured?: number;
    /**
     * 
     * @type {number}
     * @memberof StripeChargeStripeCharge
     */
    amountRefunded?: number;
    /**
     * 
     * @type {StripePaymentMethodStripePaymentMethodBillingDetails}
     * @memberof StripeChargeStripeCharge
     */
    billingDetails?: StripePaymentMethodStripePaymentMethodBillingDetails;
    /**
     * 
     * @type {string}
     * @memberof StripeChargeStripeCharge
     */
    currency?: string;
    /**
     * 
     * @type {boolean}
     * @memberof StripeChargeStripeCharge
     */
    paid?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StripeChargeStripeCharge
     */
    paymentIntent?: string;
    /**
     * 
     * @type {string}
     * @memberof StripeChargeStripeCharge
     */
    paymentMethod?: string;
}

/**
 * Check if a given object implements the StripeChargeStripeCharge interface.
 */
export function instanceOfStripeChargeStripeCharge(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StripeChargeStripeChargeFromJSON(json: any): StripeChargeStripeCharge {
    return StripeChargeStripeChargeFromJSONTyped(json, false);
}

export function StripeChargeStripeChargeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeChargeStripeCharge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'object': !exists(json, 'object') ? undefined : json['object'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'amountCaptured': !exists(json, 'amount_captured') ? undefined : json['amount_captured'],
        'amountRefunded': !exists(json, 'amount_refunded') ? undefined : json['amount_refunded'],
        'billingDetails': !exists(json, 'billing_details') ? undefined : StripePaymentMethodStripePaymentMethodBillingDetailsFromJSON(json['billing_details']),
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'paid': !exists(json, 'paid') ? undefined : json['paid'],
        'paymentIntent': !exists(json, 'payment_intent') ? undefined : json['payment_intent'],
        'paymentMethod': !exists(json, 'payment_method') ? undefined : json['payment_method'],
    };
}

export function StripeChargeStripeChargeToJSON(value?: StripeChargeStripeCharge | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'object': value.object,
        'amount': value.amount,
        'amount_captured': value.amountCaptured,
        'amount_refunded': value.amountRefunded,
        'billing_details': StripePaymentMethodStripePaymentMethodBillingDetailsToJSON(value.billingDetails),
        'currency': value.currency,
        'paid': value.paid,
        'payment_intent': value.paymentIntent,
        'payment_method': value.paymentMethod,
    };
}

