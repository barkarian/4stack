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
import type { StripePaymentMethodStripePaymentMethod } from './StripePaymentMethodStripePaymentMethod';
import {
    StripePaymentMethodStripePaymentMethodFromJSON,
    StripePaymentMethodStripePaymentMethodFromJSONTyped,
    StripePaymentMethodStripePaymentMethodToJSON,
} from './StripePaymentMethodStripePaymentMethod';

/**
 * 
 * @export
 * @interface StripePaymentMethod
 */
export interface StripePaymentMethod {
    /**
     * 
     * @type {StripePaymentMethodStripePaymentMethod}
     * @memberof StripePaymentMethod
     */
    stripePaymentMethod?: StripePaymentMethodStripePaymentMethod;
}

/**
 * Check if a given object implements the StripePaymentMethod interface.
 */
export function instanceOfStripePaymentMethod(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StripePaymentMethodFromJSON(json: any): StripePaymentMethod {
    return StripePaymentMethodFromJSONTyped(json, false);
}

export function StripePaymentMethodFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripePaymentMethod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stripePaymentMethod': !exists(json, 'stripePaymentMethod') ? undefined : StripePaymentMethodStripePaymentMethodFromJSON(json['stripePaymentMethod']),
    };
}

export function StripePaymentMethodToJSON(value?: StripePaymentMethod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stripePaymentMethod': StripePaymentMethodStripePaymentMethodToJSON(value.stripePaymentMethod),
    };
}

