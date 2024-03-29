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
import type { PropertyPaymentGatewaysAsiapay } from './PropertyPaymentGatewaysAsiapay';
import {
    PropertyPaymentGatewaysAsiapayFromJSON,
    PropertyPaymentGatewaysAsiapayFromJSONTyped,
    PropertyPaymentGatewaysAsiapayToJSON,
} from './PropertyPaymentGatewaysAsiapay';
import type { PropertyPaymentGatewaysStripe } from './PropertyPaymentGatewaysStripe';
import {
    PropertyPaymentGatewaysStripeFromJSON,
    PropertyPaymentGatewaysStripeFromJSONTyped,
    PropertyPaymentGatewaysStripeToJSON,
} from './PropertyPaymentGatewaysStripe';

/**
 * 
 * @export
 * @interface PropertyPaymentGateways
 */
export interface PropertyPaymentGateways {
    /**
     * 
     * @type {PropertyPaymentGatewaysStripe}
     * @memberof PropertyPaymentGateways
     */
    stripe?: PropertyPaymentGatewaysStripe;
    /**
     * 
     * @type {PropertyPaymentGatewaysAsiapay}
     * @memberof PropertyPaymentGateways
     */
    asiapay?: PropertyPaymentGatewaysAsiapay;
    /**
     * 
     * @type {PropertyPaymentGatewaysAsiapay}
     * @memberof PropertyPaymentGateways
     */
    authorizenet?: PropertyPaymentGatewaysAsiapay;
    /**
     * 
     * @type {PropertyPaymentGatewaysAsiapay}
     * @memberof PropertyPaymentGateways
     */
    bitpay?: PropertyPaymentGatewaysAsiapay;
    /**
     * 
     * @type {PropertyPaymentGatewaysAsiapay}
     * @memberof PropertyPaymentGateways
     */
    borgun?: PropertyPaymentGatewaysAsiapay;
    /**
     * 
     * @type {PropertyPaymentGatewaysAsiapay}
     * @memberof PropertyPaymentGateways
     */
    creditCard?: PropertyPaymentGatewaysAsiapay;
    /**
     * 
     * @type {PropertyPaymentGatewaysAsiapay}
     * @memberof PropertyPaymentGateways
     */
    customGateway?: PropertyPaymentGatewaysAsiapay;
    /**
     * 
     * @type {PropertyPaymentGatewaysAsiapay}
     * @memberof PropertyPaymentGateways
     */
    globalPayments1?: PropertyPaymentGatewaysAsiapay;
    /**
     * 
     * @type {PropertyPaymentGatewaysAsiapay}
     * @memberof PropertyPaymentGateways
     */
    globalPayments2?: PropertyPaymentGatewaysAsiapay;
    /**
     * 
     * @type {PropertyPaymentGatewaysAsiapay}
     * @memberof PropertyPaymentGateways
     */
    offlinePayment?: PropertyPaymentGatewaysAsiapay;
    /**
     * 
     * @type {PropertyPaymentGatewaysAsiapay}
     * @memberof PropertyPaymentGateways
     */
    paymill?: PropertyPaymentGatewaysAsiapay;
    /**
     * 
     * @type {PropertyPaymentGatewaysAsiapay}
     * @memberof PropertyPaymentGateways
     */
    paypal?: PropertyPaymentGatewaysAsiapay;
}

/**
 * Check if a given object implements the PropertyPaymentGateways interface.
 */
export function instanceOfPropertyPaymentGateways(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PropertyPaymentGatewaysFromJSON(json: any): PropertyPaymentGateways {
    return PropertyPaymentGatewaysFromJSONTyped(json, false);
}

export function PropertyPaymentGatewaysFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyPaymentGateways {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stripe': !exists(json, 'stripe') ? undefined : PropertyPaymentGatewaysStripeFromJSON(json['stripe']),
        'asiapay': !exists(json, 'asiapay') ? undefined : PropertyPaymentGatewaysAsiapayFromJSON(json['asiapay']),
        'authorizenet': !exists(json, 'authorizenet') ? undefined : PropertyPaymentGatewaysAsiapayFromJSON(json['authorizenet']),
        'bitpay': !exists(json, 'bitpay') ? undefined : PropertyPaymentGatewaysAsiapayFromJSON(json['bitpay']),
        'borgun': !exists(json, 'borgun') ? undefined : PropertyPaymentGatewaysAsiapayFromJSON(json['borgun']),
        'creditCard': !exists(json, 'creditCard') ? undefined : PropertyPaymentGatewaysAsiapayFromJSON(json['creditCard']),
        'customGateway': !exists(json, 'customGateway') ? undefined : PropertyPaymentGatewaysAsiapayFromJSON(json['customGateway']),
        'globalPayments1': !exists(json, 'globalPayments1') ? undefined : PropertyPaymentGatewaysAsiapayFromJSON(json['globalPayments1']),
        'globalPayments2': !exists(json, 'globalPayments2') ? undefined : PropertyPaymentGatewaysAsiapayFromJSON(json['globalPayments2']),
        'offlinePayment': !exists(json, 'offlinePayment') ? undefined : PropertyPaymentGatewaysAsiapayFromJSON(json['offlinePayment']),
        'paymill': !exists(json, 'paymill') ? undefined : PropertyPaymentGatewaysAsiapayFromJSON(json['paymill']),
        'paypal': !exists(json, 'paypal') ? undefined : PropertyPaymentGatewaysAsiapayFromJSON(json['paypal']),
    };
}

export function PropertyPaymentGatewaysToJSON(value?: PropertyPaymentGateways | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stripe': PropertyPaymentGatewaysStripeToJSON(value.stripe),
        'asiapay': PropertyPaymentGatewaysAsiapayToJSON(value.asiapay),
        'authorizenet': PropertyPaymentGatewaysAsiapayToJSON(value.authorizenet),
        'bitpay': PropertyPaymentGatewaysAsiapayToJSON(value.bitpay),
        'borgun': PropertyPaymentGatewaysAsiapayToJSON(value.borgun),
        'creditCard': PropertyPaymentGatewaysAsiapayToJSON(value.creditCard),
        'customGateway': PropertyPaymentGatewaysAsiapayToJSON(value.customGateway),
        'globalPayments1': PropertyPaymentGatewaysAsiapayToJSON(value.globalPayments1),
        'globalPayments2': PropertyPaymentGatewaysAsiapayToJSON(value.globalPayments2),
        'offlinePayment': PropertyPaymentGatewaysAsiapayToJSON(value.offlinePayment),
        'paymill': PropertyPaymentGatewaysAsiapayToJSON(value.paymill),
        'paypal': PropertyPaymentGatewaysAsiapayToJSON(value.paypal),
    };
}

