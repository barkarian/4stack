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
import type { ChannelsAirbnbUsersGet200ResponseAllOfDataInner } from './ChannelsAirbnbUsersGet200ResponseAllOfDataInner';
import {
    ChannelsAirbnbUsersGet200ResponseAllOfDataInnerFromJSON,
    ChannelsAirbnbUsersGet200ResponseAllOfDataInnerFromJSONTyped,
    ChannelsAirbnbUsersGet200ResponseAllOfDataInnerToJSON,
} from './ChannelsAirbnbUsersGet200ResponseAllOfDataInner';
import type { Pages } from './Pages';
import {
    PagesFromJSON,
    PagesFromJSONTyped,
    PagesToJSON,
} from './Pages';

/**
 * 
 * @export
 * @interface ChannelsAirbnbUsersGet200Response
 */
export interface ChannelsAirbnbUsersGet200Response {
    /**
     * 
     * @type {boolean}
     * @memberof ChannelsAirbnbUsersGet200Response
     */
    success: boolean;
    /**
     * 
     * @type {string}
     * @memberof ChannelsAirbnbUsersGet200Response
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof ChannelsAirbnbUsersGet200Response
     */
    count?: number;
    /**
     * 
     * @type {Pages}
     * @memberof ChannelsAirbnbUsersGet200Response
     */
    pages?: Pages;
    /**
     * 
     * @type {Array<ChannelsAirbnbUsersGet200ResponseAllOfDataInner>}
     * @memberof ChannelsAirbnbUsersGet200Response
     */
    data?: Array<ChannelsAirbnbUsersGet200ResponseAllOfDataInner>;
}

/**
 * Check if a given object implements the ChannelsAirbnbUsersGet200Response interface.
 */
export function instanceOfChannelsAirbnbUsersGet200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "success" in value;

    return isInstance;
}

export function ChannelsAirbnbUsersGet200ResponseFromJSON(json: any): ChannelsAirbnbUsersGet200Response {
    return ChannelsAirbnbUsersGet200ResponseFromJSONTyped(json, false);
}

export function ChannelsAirbnbUsersGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelsAirbnbUsersGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'pages': !exists(json, 'pages') ? undefined : PagesFromJSON(json['pages']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ChannelsAirbnbUsersGet200ResponseAllOfDataInnerFromJSON)),
    };
}

export function ChannelsAirbnbUsersGet200ResponseToJSON(value?: ChannelsAirbnbUsersGet200Response | null): any {
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
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ChannelsAirbnbUsersGet200ResponseAllOfDataInnerToJSON)),
    };
}

