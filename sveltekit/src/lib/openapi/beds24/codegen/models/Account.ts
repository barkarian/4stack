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
import type { AccountSearchCriteriaInner } from './AccountSearchCriteriaInner';
import {
    AccountSearchCriteriaInnerFromJSON,
    AccountSearchCriteriaInnerFromJSONTyped,
    AccountSearchCriteriaInnerToJSON,
} from './AccountSearchCriteriaInner';
import type { AccountUsage } from './AccountUsage';
import {
    AccountUsageFromJSON,
    AccountUsageFromJSONTyped,
    AccountUsageToJSON,
} from './AccountUsage';

/**
 * 
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * 
     * @type {number}
     * @memberof Account
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Account
     */
    balance?: number;
    /**
     * 
     * @type {number}
     * @memberof Account
     */
    charge?: number;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    channelCollectInvoice?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    controlCss?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    controlLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    controlMenu?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    controlText?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    dateFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    decimalPlaces?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    deduceLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    exportData?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    oneTimeVouchers?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    hidePages?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    hideSettings?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    readonlyPages?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    subControlCss?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    subControlText?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    subHidePages?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    subHideSettings?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    subReadonlyPages?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    template1?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    template2?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    template3?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    template4?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    template5?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    template6?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    template7?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    template8?: string;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    timezone?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Account
     */
    unitStatusValues?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    windowStyle?: string;
    /**
     * 
     * @type {AccountUsage}
     * @memberof Account
     */
    usage?: AccountUsage;
    /**
     * 
     * @type {Array<AccountSearchCriteriaInner>}
     * @memberof Account
     */
    searchCriteria?: Array<AccountSearchCriteriaInner>;
    /**
     * 
     * @type {Array<object>}
     * @memberof Account
     */
    subAccounts?: Array<object>;
}

/**
 * Check if a given object implements the Account interface.
 */
export function instanceOfAccount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountFromJSON(json: any): Account {
    return AccountFromJSONTyped(json, false);
}

export function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'charge': !exists(json, 'charge') ? undefined : json['charge'],
        'channelCollectInvoice': !exists(json, 'channelCollectInvoice') ? undefined : json['channelCollectInvoice'],
        'controlCss': !exists(json, 'controlCss') ? undefined : json['controlCss'],
        'controlLanguage': !exists(json, 'controlLanguage') ? undefined : json['controlLanguage'],
        'controlMenu': !exists(json, 'controlMenu') ? undefined : json['controlMenu'],
        'controlText': !exists(json, 'controlText') ? undefined : json['controlText'],
        'dateFormat': !exists(json, 'dateFormat') ? undefined : json['dateFormat'],
        'decimalPlaces': !exists(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'deduceLanguage': !exists(json, 'deduceLanguage') ? undefined : json['deduceLanguage'],
        'exportData': !exists(json, 'exportData') ? undefined : json['exportData'],
        'oneTimeVouchers': !exists(json, 'oneTimeVouchers') ? undefined : json['oneTimeVouchers'],
        'hidePages': !exists(json, 'hidePages') ? undefined : json['hidePages'],
        'hideSettings': !exists(json, 'hideSettings') ? undefined : json['hideSettings'],
        'readonlyPages': !exists(json, 'readonlyPages') ? undefined : json['readonlyPages'],
        'subControlCss': !exists(json, 'subControlCss') ? undefined : json['subControlCss'],
        'subControlText': !exists(json, 'subControlText') ? undefined : json['subControlText'],
        'subHidePages': !exists(json, 'subHidePages') ? undefined : json['subHidePages'],
        'subHideSettings': !exists(json, 'subHideSettings') ? undefined : json['subHideSettings'],
        'subReadonlyPages': !exists(json, 'subReadonlyPages') ? undefined : json['subReadonlyPages'],
        'template1': !exists(json, 'template1') ? undefined : json['template1'],
        'template2': !exists(json, 'template2') ? undefined : json['template2'],
        'template3': !exists(json, 'template3') ? undefined : json['template3'],
        'template4': !exists(json, 'template4') ? undefined : json['template4'],
        'template5': !exists(json, 'template5') ? undefined : json['template5'],
        'template6': !exists(json, 'template6') ? undefined : json['template6'],
        'template7': !exists(json, 'template7') ? undefined : json['template7'],
        'template8': !exists(json, 'template8') ? undefined : json['template8'],
        'timezone': !exists(json, 'timezone') ? undefined : json['timezone'],
        'unitStatusValues': !exists(json, 'unitStatusValues') ? undefined : json['unitStatusValues'],
        'windowStyle': !exists(json, 'windowStyle') ? undefined : json['windowStyle'],
        'usage': !exists(json, 'usage') ? undefined : AccountUsageFromJSON(json['usage']),
        'searchCriteria': !exists(json, 'searchCriteria') ? undefined : ((json['searchCriteria'] as Array<any>).map(AccountSearchCriteriaInnerFromJSON)),
        'subAccounts': !exists(json, 'subAccounts') ? undefined : json['subAccounts'],
    };
}

export function AccountToJSON(value?: Account | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'balance': value.balance,
        'charge': value.charge,
        'channelCollectInvoice': value.channelCollectInvoice,
        'controlCss': value.controlCss,
        'controlLanguage': value.controlLanguage,
        'controlMenu': value.controlMenu,
        'controlText': value.controlText,
        'dateFormat': value.dateFormat,
        'decimalPlaces': value.decimalPlaces,
        'deduceLanguage': value.deduceLanguage,
        'exportData': value.exportData,
        'oneTimeVouchers': value.oneTimeVouchers,
        'hidePages': value.hidePages,
        'hideSettings': value.hideSettings,
        'readonlyPages': value.readonlyPages,
        'subControlCss': value.subControlCss,
        'subControlText': value.subControlText,
        'subHidePages': value.subHidePages,
        'subHideSettings': value.subHideSettings,
        'subReadonlyPages': value.subReadonlyPages,
        'template1': value.template1,
        'template2': value.template2,
        'template3': value.template3,
        'template4': value.template4,
        'template5': value.template5,
        'template6': value.template6,
        'template7': value.template7,
        'template8': value.template8,
        'timezone': value.timezone,
        'unitStatusValues': value.unitStatusValues,
        'windowStyle': value.windowStyle,
        'usage': AccountUsageToJSON(value.usage),
        'searchCriteria': value.searchCriteria === undefined ? undefined : ((value.searchCriteria as Array<any>).map(AccountSearchCriteriaInnerToJSON)),
        'subAccounts': value.subAccounts,
    };
}
