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
import type { BookingsGet200ResponseAllOfDataInner } from './BookingsGet200ResponseAllOfDataInner';
import {
    BookingsGet200ResponseAllOfDataInnerFromJSON,
    BookingsGet200ResponseAllOfDataInnerFromJSONTyped,
    BookingsGet200ResponseAllOfDataInnerToJSON,
} from './BookingsGet200ResponseAllOfDataInner';
import type { Pages } from './Pages';
import {
    PagesFromJSON,
    PagesFromJSONTyped,
    PagesToJSON,
} from './Pages';

/**
 * 
 * @export
 * @interface BookingsGet200Response
 */
export interface BookingsGet200Response {
    /**
     * 
     * @type {boolean}
     * @memberof BookingsGet200Response
     */
    success: boolean;
    /**
     * 
     * @type {string}
     * @memberof BookingsGet200Response
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof BookingsGet200Response
     */
    count?: number;
    /**
     * 
     * @type {Pages}
     * @memberof BookingsGet200Response
     */
    pages?: Pages;
    /**
     * 
     * @type {Array<BookingsGet200ResponseAllOfDataInner>}
     * @memberof BookingsGet200Response
     */
    data?: Array<BookingsGet200ResponseAllOfDataInner>;
}

/**
 * Check if a given object implements the BookingsGet200Response interface.
 */
export function instanceOfBookingsGet200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "success" in value;

    return isInstance;
}

export function BookingsGet200ResponseFromJSON(json: any): BookingsGet200Response {
    return BookingsGet200ResponseFromJSONTyped(json, false);
}

export function BookingsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookingsGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'pages': !exists(json, 'pages') ? undefined : PagesFromJSON(json['pages']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(BookingsGet200ResponseAllOfDataInnerFromJSON)),
    };
}

export function BookingsGet200ResponseToJSON(value?: BookingsGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'type': value.type,
        'count': value.count,
        'pages': PagesToJSON(value.pages),
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(BookingsGet200ResponseAllOfDataInnerToJSON)),
    };
}

