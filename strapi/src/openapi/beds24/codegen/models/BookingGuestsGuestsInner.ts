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
 * @interface BookingGuestsGuestsInner
 */
export interface BookingGuestsGuestsInner {
    /**
     * 
     * @type {number}
     * @memberof BookingGuestsGuestsInner
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    mobile?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    company?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    country2?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    flagText?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    flagColor?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    note?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    custom1?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    custom2?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    custom3?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    custom4?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    custom5?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    custom6?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    custom7?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    custom8?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    custom9?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingGuestsGuestsInner
     */
    custom10?: string;
}

/**
 * Check if a given object implements the BookingGuestsGuestsInner interface.
 */
export function instanceOfBookingGuestsGuestsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BookingGuestsGuestsInnerFromJSON(json: any): BookingGuestsGuestsInner {
    return BookingGuestsGuestsInnerFromJSONTyped(json, false);
}

export function BookingGuestsGuestsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookingGuestsGuestsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'mobile': !exists(json, 'mobile') ? undefined : json['mobile'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'postcode': !exists(json, 'postcode') ? undefined : json['postcode'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'country2': !exists(json, 'country2') ? undefined : json['country2'],
        'flagText': !exists(json, 'flagText') ? undefined : json['flagText'],
        'flagColor': !exists(json, 'flagColor') ? undefined : json['flagColor'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'custom1': !exists(json, 'custom1') ? undefined : json['custom1'],
        'custom2': !exists(json, 'custom2') ? undefined : json['custom2'],
        'custom3': !exists(json, 'custom3') ? undefined : json['custom3'],
        'custom4': !exists(json, 'custom4') ? undefined : json['custom4'],
        'custom5': !exists(json, 'custom5') ? undefined : json['custom5'],
        'custom6': !exists(json, 'custom6') ? undefined : json['custom6'],
        'custom7': !exists(json, 'custom7') ? undefined : json['custom7'],
        'custom8': !exists(json, 'custom8') ? undefined : json['custom8'],
        'custom9': !exists(json, 'custom9') ? undefined : json['custom9'],
        'custom10': !exists(json, 'custom10') ? undefined : json['custom10'],
    };
}

export function BookingGuestsGuestsInnerToJSON(value?: BookingGuestsGuestsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
        'phone': value.phone,
        'mobile': value.mobile,
        'company': value.company,
        'address': value.address,
        'city': value.city,
        'state': value.state,
        'postcode': value.postcode,
        'country': value.country,
        'country2': value.country2,
        'flagText': value.flagText,
        'flagColor': value.flagColor,
        'note': value.note,
        'custom1': value.custom1,
        'custom2': value.custom2,
        'custom3': value.custom3,
        'custom4': value.custom4,
        'custom5': value.custom5,
        'custom6': value.custom6,
        'custom7': value.custom7,
        'custom8': value.custom8,
        'custom9': value.custom9,
        'custom10': value.custom10,
    };
}
