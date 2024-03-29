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
import type { CalendarCalendarInnerChannels } from './CalendarCalendarInnerChannels';
import {
    CalendarCalendarInnerChannelsFromJSON,
    CalendarCalendarInnerChannelsFromJSONTyped,
    CalendarCalendarInnerChannelsToJSON,
} from './CalendarCalendarInnerChannels';

/**
 * To remove any property, set the value to null.
 * @export
 * @interface CalendarCalendarInner
 */
export interface CalendarCalendarInner {
    /**
     * 
     * @type {Date}
     * @memberof CalendarCalendarInner
     */
    from?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CalendarCalendarInner
     */
    to?: Date;
    /**
     * Note that this may be negative in some circumstances, such as if a room is overbooked. If you change override from blackout to none without setting numAvail, numAvail will change to the maximum possible
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    numAvail?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    minStay?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    maxStay?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    multiplier?: number;
    /**
     * If you change override from blackout to none without setting numAvail, numAvail will change to the maximum possible
     * @type {string}
     * @memberof CalendarCalendarInner
     */
    override?: CalendarCalendarInnerOverrideEnum;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price1?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price2?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price3?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price4?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price5?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price6?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price7?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price8?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price9?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price10?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price11?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price12?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price13?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price14?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price15?: number;
    /**
     * 
     * @type {number}
     * @memberof CalendarCalendarInner
     */
    price16?: number;
    /**
     * 
     * @type {CalendarCalendarInnerChannels}
     * @memberof CalendarCalendarInner
     */
    channels?: CalendarCalendarInnerChannels;
}


/**
 * @export
 */
export const CalendarCalendarInnerOverrideEnum = {
    None: 'none',
    Blackout: 'blackout',
    Exception: 'exception',
    NoCheckIn: 'noCheckIn',
    NoCheckOut: 'noCheckOut',
    NoCheckInOrCheckOut: 'noCheckInOrCheckOut'
} as const;
export type CalendarCalendarInnerOverrideEnum = typeof CalendarCalendarInnerOverrideEnum[keyof typeof CalendarCalendarInnerOverrideEnum];


/**
 * Check if a given object implements the CalendarCalendarInner interface.
 */
export function instanceOfCalendarCalendarInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CalendarCalendarInnerFromJSON(json: any): CalendarCalendarInner {
    return CalendarCalendarInnerFromJSONTyped(json, false);
}

export function CalendarCalendarInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CalendarCalendarInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': !exists(json, 'from') ? undefined : (new Date(json['from'])),
        'to': !exists(json, 'to') ? undefined : (new Date(json['to'])),
        'numAvail': !exists(json, 'numAvail') ? undefined : json['numAvail'],
        'minStay': !exists(json, 'minStay') ? undefined : json['minStay'],
        'maxStay': !exists(json, 'maxStay') ? undefined : json['maxStay'],
        'multiplier': !exists(json, 'multiplier') ? undefined : json['multiplier'],
        'override': !exists(json, 'override') ? undefined : json['override'],
        'price1': !exists(json, 'price1') ? undefined : json['price1'],
        'price2': !exists(json, 'price2') ? undefined : json['price2'],
        'price3': !exists(json, 'price3') ? undefined : json['price3'],
        'price4': !exists(json, 'price4') ? undefined : json['price4'],
        'price5': !exists(json, 'price5') ? undefined : json['price5'],
        'price6': !exists(json, 'price6') ? undefined : json['price6'],
        'price7': !exists(json, 'price7') ? undefined : json['price7'],
        'price8': !exists(json, 'price8') ? undefined : json['price8'],
        'price9': !exists(json, 'price9') ? undefined : json['price9'],
        'price10': !exists(json, 'price10') ? undefined : json['price10'],
        'price11': !exists(json, 'price11') ? undefined : json['price11'],
        'price12': !exists(json, 'price12') ? undefined : json['price12'],
        'price13': !exists(json, 'price13') ? undefined : json['price13'],
        'price14': !exists(json, 'price14') ? undefined : json['price14'],
        'price15': !exists(json, 'price15') ? undefined : json['price15'],
        'price16': !exists(json, 'price16') ? undefined : json['price16'],
        'channels': !exists(json, 'channels') ? undefined : CalendarCalendarInnerChannelsFromJSON(json['channels']),
    };
}

export function CalendarCalendarInnerToJSON(value?: CalendarCalendarInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from === undefined ? undefined : (value.from.toISOString().substring(0,10)),
        'to': value.to === undefined ? undefined : (value.to.toISOString().substring(0,10)),
        'numAvail': value.numAvail,
        'minStay': value.minStay,
        'maxStay': value.maxStay,
        'multiplier': value.multiplier,
        'override': value.override,
        'price1': value.price1,
        'price2': value.price2,
        'price3': value.price3,
        'price4': value.price4,
        'price5': value.price5,
        'price6': value.price6,
        'price7': value.price7,
        'price8': value.price8,
        'price9': value.price9,
        'price10': value.price10,
        'price11': value.price11,
        'price12': value.price12,
        'price13': value.price13,
        'price14': value.price14,
        'price15': value.price15,
        'price16': value.price16,
        'channels': CalendarCalendarInnerChannelsToJSON(value.channels),
    };
}

