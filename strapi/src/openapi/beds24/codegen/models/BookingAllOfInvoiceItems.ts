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
 * @interface BookingAllOfInvoiceItems
 */
export interface BookingAllOfInvoiceItems {
    /**
     * 
     * @type {number}
     * @memberof BookingAllOfInvoiceItems
     */
    invoiceId?: number | null;
}

/**
 * Check if a given object implements the BookingAllOfInvoiceItems interface.
 */
export function instanceOfBookingAllOfInvoiceItems(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BookingAllOfInvoiceItemsFromJSON(json: any): BookingAllOfInvoiceItems {
    return BookingAllOfInvoiceItemsFromJSONTyped(json, false);
}

export function BookingAllOfInvoiceItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookingAllOfInvoiceItems {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invoiceId': !exists(json, 'invoiceId') ? undefined : json['invoiceId'],
    };
}

export function BookingAllOfInvoiceItemsToJSON(value?: BookingAllOfInvoiceItems | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invoiceId': value.invoiceId,
    };
}

