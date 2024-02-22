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
 * @interface WebhooksBookingsPostRequestInfoItemsInner
 */
export interface WebhooksBookingsPostRequestInfoItemsInner {
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestInfoItemsInner
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestInfoItemsInner
     */
    bookingId?: number;
    /**
     * 
     * @type {Date}
     * @memberof WebhooksBookingsPostRequestInfoItemsInner
     */
    createTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestInfoItemsInner
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestInfoItemsInner
     */
    text?: string;
}

/**
 * Check if a given object implements the WebhooksBookingsPostRequestInfoItemsInner interface.
 */
export function instanceOfWebhooksBookingsPostRequestInfoItemsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebhooksBookingsPostRequestInfoItemsInnerFromJSON(json: any): WebhooksBookingsPostRequestInfoItemsInner {
    return WebhooksBookingsPostRequestInfoItemsInnerFromJSONTyped(json, false);
}

export function WebhooksBookingsPostRequestInfoItemsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhooksBookingsPostRequestInfoItemsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'bookingId': !exists(json, 'bookingId') ? undefined : json['bookingId'],
        'createTime': !exists(json, 'createTime') ? undefined : (new Date(json['createTime'])),
        'code': !exists(json, 'code') ? undefined : json['code'],
        'text': !exists(json, 'text') ? undefined : json['text'],
    };
}

export function WebhooksBookingsPostRequestInfoItemsInnerToJSON(value?: WebhooksBookingsPostRequestInfoItemsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'bookingId': value.bookingId,
        'createTime': value.createTime === undefined ? undefined : (value.createTime.toISOString()),
        'code': value.code,
        'text': value.text,
    };
}

