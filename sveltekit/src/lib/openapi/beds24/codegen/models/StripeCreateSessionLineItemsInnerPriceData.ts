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
import type { StripeCreateSessionLineItemsInnerPriceDataProductData } from './StripeCreateSessionLineItemsInnerPriceDataProductData';
import {
    StripeCreateSessionLineItemsInnerPriceDataProductDataFromJSON,
    StripeCreateSessionLineItemsInnerPriceDataProductDataFromJSONTyped,
    StripeCreateSessionLineItemsInnerPriceDataProductDataToJSON,
} from './StripeCreateSessionLineItemsInnerPriceDataProductData';

/**
 * 
 * @export
 * @interface StripeCreateSessionLineItemsInnerPriceData
 */
export interface StripeCreateSessionLineItemsInnerPriceData {
    /**
     * 
     * @type {string}
     * @memberof StripeCreateSessionLineItemsInnerPriceData
     */
    currency?: string;
    /**
     * 
     * @type {StripeCreateSessionLineItemsInnerPriceDataProductData}
     * @memberof StripeCreateSessionLineItemsInnerPriceData
     */
    productData?: StripeCreateSessionLineItemsInnerPriceDataProductData;
    /**
     * 
     * @type {number}
     * @memberof StripeCreateSessionLineItemsInnerPriceData
     */
    unitAmount?: number;
}

/**
 * Check if a given object implements the StripeCreateSessionLineItemsInnerPriceData interface.
 */
export function instanceOfStripeCreateSessionLineItemsInnerPriceData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StripeCreateSessionLineItemsInnerPriceDataFromJSON(json: any): StripeCreateSessionLineItemsInnerPriceData {
    return StripeCreateSessionLineItemsInnerPriceDataFromJSONTyped(json, false);
}

export function StripeCreateSessionLineItemsInnerPriceDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeCreateSessionLineItemsInnerPriceData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'productData': !exists(json, 'product_data') ? undefined : StripeCreateSessionLineItemsInnerPriceDataProductDataFromJSON(json['product_data']),
        'unitAmount': !exists(json, 'unit_amount') ? undefined : json['unit_amount'],
    };
}

export function StripeCreateSessionLineItemsInnerPriceDataToJSON(value?: StripeCreateSessionLineItemsInnerPriceData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency': value.currency,
        'product_data': StripeCreateSessionLineItemsInnerPriceDataProductDataToJSON(value.productData),
        'unit_amount': value.unitAmount,
    };
}
