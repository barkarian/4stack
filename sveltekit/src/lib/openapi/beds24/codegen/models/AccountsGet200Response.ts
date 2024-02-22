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
import type { Account } from './Account';
import {
    AccountFromJSON,
    AccountFromJSONTyped,
    AccountToJSON,
} from './Account';
import type { Pages } from './Pages';
import {
    PagesFromJSON,
    PagesFromJSONTyped,
    PagesToJSON,
} from './Pages';

/**
 * 
 * @export
 * @interface AccountsGet200Response
 */
export interface AccountsGet200Response {
    /**
     * 
     * @type {boolean}
     * @memberof AccountsGet200Response
     */
    success: boolean;
    /**
     * 
     * @type {string}
     * @memberof AccountsGet200Response
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof AccountsGet200Response
     */
    count?: number;
    /**
     * 
     * @type {Pages}
     * @memberof AccountsGet200Response
     */
    pages?: Pages;
    /**
     * 
     * @type {Array<Account>}
     * @memberof AccountsGet200Response
     */
    data?: Array<Account>;
}

/**
 * Check if a given object implements the AccountsGet200Response interface.
 */
export function instanceOfAccountsGet200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "success" in value;

    return isInstance;
}

export function AccountsGet200ResponseFromJSON(json: any): AccountsGet200Response {
    return AccountsGet200ResponseFromJSONTyped(json, false);
}

export function AccountsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountsGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'pages': !exists(json, 'pages') ? undefined : PagesFromJSON(json['pages']),
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(AccountFromJSON)),
    };
}

export function AccountsGet200ResponseToJSON(value?: AccountsGet200Response | null): any {
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
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(AccountToJSON)),
    };
}

