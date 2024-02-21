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
import type { PriceRulesBookingPage } from './PriceRulesBookingPage';
import {
    PriceRulesBookingPageFromJSON,
    PriceRulesBookingPageFromJSONTyped,
    PriceRulesBookingPageToJSON,
} from './PriceRulesBookingPage';
import type { PriceRulesChannels } from './PriceRulesChannels';
import {
    PriceRulesChannelsFromJSON,
    PriceRulesChannelsFromJSONTyped,
    PriceRulesChannelsToJSON,
} from './PriceRulesChannels';
import type { PriceRulesPriceFor } from './PriceRulesPriceFor';
import {
    PriceRulesPriceForFromJSON,
    PriceRulesPriceForFromJSONTyped,
    PriceRulesPriceForToJSON,
} from './PriceRulesPriceFor';
import type { PriceRulesPriceLinking } from './PriceRulesPriceLinking';
import {
    PriceRulesPriceLinkingFromJSON,
    PriceRulesPriceLinkingFromJSONTyped,
    PriceRulesPriceLinkingToJSON,
} from './PriceRulesPriceLinking';
import type { PriceRulesUpsellItemsInner } from './PriceRulesUpsellItemsInner';
import {
    PriceRulesUpsellItemsInnerFromJSON,
    PriceRulesUpsellItemsInnerFromJSONTyped,
    PriceRulesUpsellItemsInnerToJSON,
} from './PriceRulesUpsellItemsInner';

/**
 * 
 * @export
 * @interface PriceRules
 */
export interface PriceRules {
    /**
     * 
     * @type {number}
     * @memberof PriceRules
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PriceRules
     */
    name?: string;
    /**
     * 
     * @type {PriceRulesPriceFor}
     * @memberof PriceRules
     */
    priceFor?: PriceRulesPriceFor;
    /**
     * 
     * @type {number}
     * @memberof PriceRules
     */
    extraPerson?: number;
    /**
     * 
     * @type {number}
     * @memberof PriceRules
     */
    extraChild?: number;
    /**
     * 
     * @type {number}
     * @memberof PriceRules
     */
    minimumStay?: number;
    /**
     * 
     * @type {number}
     * @memberof PriceRules
     */
    maximumStay?: number;
    /**
     * 
     * @type {number}
     * @memberof PriceRules
     */
    offer?: number;
    /**
     * 
     * @type {number}
     * @memberof PriceRules
     */
    minDaysUntilCheckin?: number;
    /**
     * 
     * @type {number}
     * @memberof PriceRules
     */
    maxDaysUntilCheckin?: number;
    /**
     * 
     * @type {string}
     * @memberof PriceRules
     */
    color?: string;
    /**
     * 
     * @type {PriceRulesPriceLinking}
     * @memberof PriceRules
     */
    priceLinking?: PriceRulesPriceLinking;
    /**
     * 
     * @type {Array<string>}
     * @memberof PriceRules
     */
    agentCodes?: Array<string>;
    /**
     * 
     * @type {PriceRulesBookingPage}
     * @memberof PriceRules
     */
    bookingPage?: PriceRulesBookingPage;
    /**
     * 
     * @type {PriceRulesChannels}
     * @memberof PriceRules
     */
    channels?: PriceRulesChannels;
    /**
     * 
     * @type {Array<PriceRulesUpsellItemsInner>}
     * @memberof PriceRules
     */
    upsellItems?: Array<PriceRulesUpsellItemsInner>;
    /**
     * 
     * @type {Array<PriceRulesUpsellItemsInner>}
     * @memberof PriceRules
     */
    voucherCodes?: Array<PriceRulesUpsellItemsInner>;
}

/**
 * Check if a given object implements the PriceRules interface.
 */
export function instanceOfPriceRules(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PriceRulesFromJSON(json: any): PriceRules {
    return PriceRulesFromJSONTyped(json, false);
}

export function PriceRulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceRules {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'priceFor': !exists(json, 'priceFor') ? undefined : PriceRulesPriceForFromJSON(json['priceFor']),
        'extraPerson': !exists(json, 'extraPerson') ? undefined : json['extraPerson'],
        'extraChild': !exists(json, 'extraChild') ? undefined : json['extraChild'],
        'minimumStay': !exists(json, 'minimumStay') ? undefined : json['minimumStay'],
        'maximumStay': !exists(json, 'maximumStay') ? undefined : json['maximumStay'],
        'offer': !exists(json, 'offer') ? undefined : json['offer'],
        'minDaysUntilCheckin': !exists(json, 'minDaysUntilCheckin') ? undefined : json['minDaysUntilCheckin'],
        'maxDaysUntilCheckin': !exists(json, 'maxDaysUntilCheckin') ? undefined : json['maxDaysUntilCheckin'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'priceLinking': !exists(json, 'priceLinking') ? undefined : PriceRulesPriceLinkingFromJSON(json['priceLinking']),
        'agentCodes': !exists(json, 'agentCodes') ? undefined : json['agentCodes'],
        'bookingPage': !exists(json, 'bookingPage') ? undefined : PriceRulesBookingPageFromJSON(json['bookingPage']),
        'channels': !exists(json, 'channels') ? undefined : PriceRulesChannelsFromJSON(json['channels']),
        'upsellItems': !exists(json, 'upsellItems') ? undefined : ((json['upsellItems'] as Array<any>).map(PriceRulesUpsellItemsInnerFromJSON)),
        'voucherCodes': !exists(json, 'voucherCodes') ? undefined : ((json['voucherCodes'] as Array<any>).map(PriceRulesUpsellItemsInnerFromJSON)),
    };
}

export function PriceRulesToJSON(value?: PriceRules | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'priceFor': PriceRulesPriceForToJSON(value.priceFor),
        'extraPerson': value.extraPerson,
        'extraChild': value.extraChild,
        'minimumStay': value.minimumStay,
        'maximumStay': value.maximumStay,
        'offer': value.offer,
        'minDaysUntilCheckin': value.minDaysUntilCheckin,
        'maxDaysUntilCheckin': value.maxDaysUntilCheckin,
        'color': value.color,
        'priceLinking': PriceRulesPriceLinkingToJSON(value.priceLinking),
        'agentCodes': value.agentCodes,
        'bookingPage': PriceRulesBookingPageToJSON(value.bookingPage),
        'channels': PriceRulesChannelsToJSON(value.channels),
        'upsellItems': value.upsellItems === undefined ? undefined : ((value.upsellItems as Array<any>).map(PriceRulesUpsellItemsInnerToJSON)),
        'voucherCodes': value.voucherCodes === undefined ? undefined : ((value.voucherCodes as Array<any>).map(PriceRulesUpsellItemsInnerToJSON)),
    };
}

