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
import type { Invoice } from './Invoice';
import {
    InvoiceFromJSON,
    InvoiceFromJSONTyped,
    InvoiceToJSON,
} from './Invoice';
import type { NewBookingInfoItemsInner } from './NewBookingInfoItemsInner';
import {
    NewBookingInfoItemsInnerFromJSON,
    NewBookingInfoItemsInnerFromJSONTyped,
    NewBookingInfoItemsInnerToJSON,
} from './NewBookingInfoItemsInner';

/**
 * 
 * @export
 * @interface NewBooking
 */
export interface NewBooking {
    /**
     * 
     * @type {number}
     * @memberof NewBooking
     */
    masterId?: number;
    /**
     * 
     * @type {number}
     * @memberof NewBooking
     */
    roomId: number;
    /**
     * 
     * @type {number}
     * @memberof NewBooking
     */
    unitId?: number;
    /**
     * 
     * @type {number}
     * @memberof NewBooking
     */
    roomQty?: number;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    status?: NewBookingStatusEnum;
    /**
     * 
     * @type {Date}
     * @memberof NewBooking
     */
    arrival: Date;
    /**
     * 
     * @type {Date}
     * @memberof NewBooking
     */
    departure: Date;
    /**
     * 
     * @type {number}
     * @memberof NewBooking
     */
    numAdult?: number;
    /**
     * 
     * @type {number}
     * @memberof NewBooking
     */
    numChild?: number;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    mobile?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    fax?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    company?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    postcode?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    country2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    arrivalTime?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    voucher?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    comments?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    groupNote?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    custom1?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    custom2?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    custom3?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    custom4?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    custom5?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    custom6?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    custom7?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    custom8?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    custom9?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    custom10?: string;
    /**
     * Must be a 6 character hexadecimal color or an empty string.
     * @type {string}
     * @memberof NewBooking
     */
    flagColor?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    flagText?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    lang?: string;
    /**
     * 
     * @type {number}
     * @memberof NewBooking
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof NewBooking
     */
    deposit?: number;
    /**
     * 
     * @type {number}
     * @memberof NewBooking
     */
    tax?: number;
    /**
     * 
     * @type {number}
     * @memberof NewBooking
     */
    commission?: number;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    refererEditable?: string;
    /**
     * 
     * @type {string}
     * @memberof NewBooking
     */
    rateDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof NewBooking
     */
    invoiceeId?: number | null;
    /**
     * 
     * @type {Array<Invoice>}
     * @memberof NewBooking
     */
    invoiceItems?: Array<Invoice>;
    /**
     * 
     * @type {Array<NewBookingInfoItemsInner>}
     * @memberof NewBooking
     */
    infoItems?: Array<NewBookingInfoItemsInner>;
}


/**
 * @export
 */
export const NewBookingStatusEnum = {
    Confirmed: 'confirmed',
    Request: 'request',
    New: 'new',
    Cancelled: 'cancelled',
    Black: 'black',
    Inquiry: 'inquiry'
} as const;
export type NewBookingStatusEnum = typeof NewBookingStatusEnum[keyof typeof NewBookingStatusEnum];


/**
 * Check if a given object implements the NewBooking interface.
 */
export function instanceOfNewBooking(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "roomId" in value;
    isInstance = isInstance && "arrival" in value;
    isInstance = isInstance && "departure" in value;

    return isInstance;
}

export function NewBookingFromJSON(json: any): NewBooking {
    return NewBookingFromJSONTyped(json, false);
}

export function NewBookingFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewBooking {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'masterId': !exists(json, 'masterId') ? undefined : json['masterId'],
        'roomId': json['roomId'],
        'unitId': !exists(json, 'unitId') ? undefined : json['unitId'],
        'roomQty': !exists(json, 'roomQty') ? undefined : json['roomQty'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'arrival': (new Date(json['arrival'])),
        'departure': (new Date(json['departure'])),
        'numAdult': !exists(json, 'numAdult') ? undefined : json['numAdult'],
        'numChild': !exists(json, 'numChild') ? undefined : json['numChild'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'mobile': !exists(json, 'mobile') ? undefined : json['mobile'],
        'fax': !exists(json, 'fax') ? undefined : json['fax'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'postcode': !exists(json, 'postcode') ? undefined : json['postcode'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'country2': !exists(json, 'country2') ? undefined : json['country2'],
        'arrivalTime': !exists(json, 'arrivalTime') ? undefined : json['arrivalTime'],
        'voucher': !exists(json, 'voucher') ? undefined : json['voucher'],
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'groupNote': !exists(json, 'groupNote') ? undefined : json['groupNote'],
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
        'flagColor': !exists(json, 'flagColor') ? undefined : json['flagColor'],
        'flagText': !exists(json, 'flagText') ? undefined : json['flagText'],
        'lang': !exists(json, 'lang') ? undefined : json['lang'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'deposit': !exists(json, 'deposit') ? undefined : json['deposit'],
        'tax': !exists(json, 'tax') ? undefined : json['tax'],
        'commission': !exists(json, 'commission') ? undefined : json['commission'],
        'refererEditable': !exists(json, 'refererEditable') ? undefined : json['refererEditable'],
        'rateDescription': !exists(json, 'rateDescription') ? undefined : json['rateDescription'],
        'invoiceeId': !exists(json, 'invoiceeId') ? undefined : json['invoiceeId'],
        'invoiceItems': !exists(json, 'invoiceItems') ? undefined : ((json['invoiceItems'] as Array<any>).map(InvoiceFromJSON)),
        'infoItems': !exists(json, 'infoItems') ? undefined : ((json['infoItems'] as Array<any>).map(NewBookingInfoItemsInnerFromJSON)),
    };
}

export function NewBookingToJSON(value?: NewBooking | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'masterId': value.masterId,
        'roomId': value.roomId,
        'unitId': value.unitId,
        'roomQty': value.roomQty,
        'status': value.status,
        'arrival': (value.arrival.toISOString().substring(0,10)),
        'departure': (value.departure.toISOString().substring(0,10)),
        'numAdult': value.numAdult,
        'numChild': value.numChild,
        'title': value.title,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
        'phone': value.phone,
        'mobile': value.mobile,
        'fax': value.fax,
        'company': value.company,
        'address': value.address,
        'city': value.city,
        'state': value.state,
        'postcode': value.postcode,
        'country': value.country,
        'country2': value.country2,
        'arrivalTime': value.arrivalTime,
        'voucher': value.voucher,
        'comments': value.comments,
        'notes': value.notes,
        'message': value.message,
        'groupNote': value.groupNote,
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
        'flagColor': value.flagColor,
        'flagText': value.flagText,
        'lang': value.lang,
        'price': value.price,
        'deposit': value.deposit,
        'tax': value.tax,
        'commission': value.commission,
        'refererEditable': value.refererEditable,
        'rateDescription': value.rateDescription,
        'invoiceeId': value.invoiceeId,
        'invoiceItems': value.invoiceItems === undefined ? undefined : ((value.invoiceItems as Array<any>).map(InvoiceToJSON)),
        'infoItems': value.infoItems === undefined ? undefined : ((value.infoItems as Array<any>).map(NewBookingInfoItemsInnerToJSON)),
    };
}

