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
import type { WebhooksBookingsPostRequestBookingAllowCancellation } from './WebhooksBookingsPostRequestBookingAllowCancellation';
import {
    WebhooksBookingsPostRequestBookingAllowCancellationFromJSON,
    WebhooksBookingsPostRequestBookingAllowCancellationFromJSONTyped,
    WebhooksBookingsPostRequestBookingAllowCancellationToJSON,
} from './WebhooksBookingsPostRequestBookingAllowCancellation';
import type { WebhooksBookingsPostRequestBookingBookingGroup } from './WebhooksBookingsPostRequestBookingBookingGroup';
import {
    WebhooksBookingsPostRequestBookingBookingGroupFromJSON,
    WebhooksBookingsPostRequestBookingBookingGroupFromJSONTyped,
    WebhooksBookingsPostRequestBookingBookingGroupToJSON,
} from './WebhooksBookingsPostRequestBookingBookingGroup';

/**
 * 
 * @export
 * @interface WebhooksBookingsPostRequestBooking
 */
export interface WebhooksBookingsPostRequestBooking {
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    id?: number;
    /**
     * 
     * @type {WebhooksBookingsPostRequestBookingBookingGroup}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    bookingGroup?: WebhooksBookingsPostRequestBookingBookingGroup | null;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    masterId?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    propertyId?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    roomId?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    unitId?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    roomQty?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    offerId?: number;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    subStatus?: string;
    /**
     * 
     * @type {Date}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    arrival?: Date;
    /**
     * 
     * @type {Date}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    departure?: Date;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    numAdult?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    numChild?: number;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    country2?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    arrivalTime?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    voucher?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    comments?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    groupNote?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    custom1?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    custom2?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    custom3?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    custom4?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    custom5?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    custom6?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    custom7?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    custom8?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    custom9?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    custom10?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    flagColor?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    flagText?: string;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    statusCode?: number;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    lang?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    referer?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    refererEditable?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    reference?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    channel?: string;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    apiSourceId?: number;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    apiSource?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    apiReference?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    allowChannelUpdate?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    allowAutoAction?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    allowReview?: string;
    /**
     * 
     * @type {WebhooksBookingsPostRequestBookingAllowCancellation}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    allowCancellation?: WebhooksBookingsPostRequestBookingAllowCancellation;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    invoiceeId?: string;
    /**
     * 
     * @type {Date}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    bookingTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    modifiedTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    cancelTime?: string;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    deposit?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    tax?: number;
    /**
     * 
     * @type {number}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    commission?: number;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    rateDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    stripeToken?: string;
    /**
     * 
     * @type {string}
     * @memberof WebhooksBookingsPostRequestBooking
     */
    apiMessage?: string;
}

/**
 * Check if a given object implements the WebhooksBookingsPostRequestBooking interface.
 */
export function instanceOfWebhooksBookingsPostRequestBooking(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebhooksBookingsPostRequestBookingFromJSON(json: any): WebhooksBookingsPostRequestBooking {
    return WebhooksBookingsPostRequestBookingFromJSONTyped(json, false);
}

export function WebhooksBookingsPostRequestBookingFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhooksBookingsPostRequestBooking {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'bookingGroup': !exists(json, 'bookingGroup') ? undefined : WebhooksBookingsPostRequestBookingBookingGroupFromJSON(json['bookingGroup']),
        'masterId': !exists(json, 'masterId') ? undefined : json['masterId'],
        'propertyId': !exists(json, 'propertyId') ? undefined : json['propertyId'],
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'unitId': !exists(json, 'unitId') ? undefined : json['unitId'],
        'roomQty': !exists(json, 'roomQty') ? undefined : json['roomQty'],
        'offerId': !exists(json, 'offerId') ? undefined : json['offerId'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'subStatus': !exists(json, 'subStatus') ? undefined : json['subStatus'],
        'arrival': !exists(json, 'arrival') ? undefined : (new Date(json['arrival'])),
        'departure': !exists(json, 'departure') ? undefined : (new Date(json['departure'])),
        'numAdult': !exists(json, 'numAdult') ? undefined : json['numAdult'],
        'numChild': !exists(json, 'numChild') ? undefined : json['numChild'],
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
        'statusCode': !exists(json, 'statusCode') ? undefined : json['statusCode'],
        'lang': !exists(json, 'lang') ? undefined : json['lang'],
        'referer': !exists(json, 'referer') ? undefined : json['referer'],
        'refererEditable': !exists(json, 'refererEditable') ? undefined : json['refererEditable'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'apiSourceId': !exists(json, 'apiSourceId') ? undefined : json['apiSourceId'],
        'apiSource': !exists(json, 'apiSource') ? undefined : json['apiSource'],
        'apiReference': !exists(json, 'apiReference') ? undefined : json['apiReference'],
        'allowChannelUpdate': !exists(json, 'allowChannelUpdate') ? undefined : json['allowChannelUpdate'],
        'allowAutoAction': !exists(json, 'allowAutoAction') ? undefined : json['allowAutoAction'],
        'allowReview': !exists(json, 'allowReview') ? undefined : json['allowReview'],
        'allowCancellation': !exists(json, 'allowCancellation') ? undefined : WebhooksBookingsPostRequestBookingAllowCancellationFromJSON(json['allowCancellation']),
        'invoiceeId': !exists(json, 'invoiceeId') ? undefined : json['invoiceeId'],
        'bookingTime': !exists(json, 'bookingTime') ? undefined : (new Date(json['bookingTime'])),
        'modifiedTime': !exists(json, 'modifiedTime') ? undefined : (new Date(json['modifiedTime'])),
        'cancelTime': !exists(json, 'cancelTime') ? undefined : json['cancelTime'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'deposit': !exists(json, 'deposit') ? undefined : json['deposit'],
        'tax': !exists(json, 'tax') ? undefined : json['tax'],
        'commission': !exists(json, 'commission') ? undefined : json['commission'],
        'rateDescription': !exists(json, 'rateDescription') ? undefined : json['rateDescription'],
        'stripeToken': !exists(json, 'stripeToken') ? undefined : json['stripeToken'],
        'apiMessage': !exists(json, 'apiMessage') ? undefined : json['apiMessage'],
    };
}

export function WebhooksBookingsPostRequestBookingToJSON(value?: WebhooksBookingsPostRequestBooking | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'bookingGroup': WebhooksBookingsPostRequestBookingBookingGroupToJSON(value.bookingGroup),
        'masterId': value.masterId,
        'propertyId': value.propertyId,
        'roomId': value.roomId,
        'unitId': value.unitId,
        'roomQty': value.roomQty,
        'offerId': value.offerId,
        'status': value.status,
        'subStatus': value.subStatus,
        'arrival': value.arrival === undefined ? undefined : (value.arrival.toISOString().substring(0,10)),
        'departure': value.departure === undefined ? undefined : (value.departure.toISOString().substring(0,10)),
        'numAdult': value.numAdult,
        'numChild': value.numChild,
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
        'statusCode': value.statusCode,
        'lang': value.lang,
        'referer': value.referer,
        'refererEditable': value.refererEditable,
        'reference': value.reference,
        'channel': value.channel,
        'apiSourceId': value.apiSourceId,
        'apiSource': value.apiSource,
        'apiReference': value.apiReference,
        'allowChannelUpdate': value.allowChannelUpdate,
        'allowAutoAction': value.allowAutoAction,
        'allowReview': value.allowReview,
        'allowCancellation': WebhooksBookingsPostRequestBookingAllowCancellationToJSON(value.allowCancellation),
        'invoiceeId': value.invoiceeId,
        'bookingTime': value.bookingTime === undefined ? undefined : (value.bookingTime.toISOString()),
        'modifiedTime': value.modifiedTime === undefined ? undefined : (value.modifiedTime.toISOString()),
        'cancelTime': value.cancelTime,
        'price': value.price,
        'deposit': value.deposit,
        'tax': value.tax,
        'commission': value.commission,
        'rateDescription': value.rateDescription,
        'stripeToken': value.stripeToken,
        'apiMessage': value.apiMessage,
    };
}
