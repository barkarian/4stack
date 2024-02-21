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
 * @interface OfferResponse
 */
export interface OfferResponse {
    /**
     * 
     * @type {number}
     * @memberof OfferResponse
     */
    offerId?: number;
    /**
     * 
     * @type {string}
     * @memberof OfferResponse
     */
    offerName?: string;
    /**
     * 
     * @type {number}
     * @memberof OfferResponse
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof OfferResponse
     */
    unitsAvailable?: number;
}

/**
 * Check if a given object implements the OfferResponse interface.
 */
export function instanceOfOfferResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OfferResponseFromJSON(json: any): OfferResponse {
    return OfferResponseFromJSONTyped(json, false);
}

export function OfferResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OfferResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'offerId': !exists(json, 'offerId') ? undefined : json['offerId'],
        'offerName': !exists(json, 'offerName') ? undefined : json['offerName'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'unitsAvailable': !exists(json, 'unitsAvailable') ? undefined : json['unitsAvailable'],
    };
}

export function OfferResponseToJSON(value?: OfferResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'offerId': value.offerId,
        'offerName': value.offerName,
        'price': value.price,
        'unitsAvailable': value.unitsAvailable,
    };
}

