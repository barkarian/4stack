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
 * @interface HostMessage
 */
export interface HostMessage {
    /**
     * 
     * @type {number}
     * @memberof HostMessage
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof HostMessage
     */
    bookingId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof HostMessage
     */
    read?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HostMessage
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof HostMessage
     */
    attachment?: string;
    /**
     * 
     * @type {string}
     * @memberof HostMessage
     */
    attachmentName?: string;
    /**
     * Supported mime types by channel:
     * 
     * Airbnb - jpeg, png and gif
     * 
     * Booking.com - jpeg, png"
     * 
     * VRBO - jpeg, png, gif, pdf
     * 
     * @type {string}
     * @memberof HostMessage
     */
    attachmentMimeType?: HostMessageAttachmentMimeTypeEnum;
}


/**
 * @export
 */
export const HostMessageAttachmentMimeTypeEnum = {
    ImageJpeg: 'image/jpeg',
    ImagePng: 'image/png',
    ImageGif: 'image/gif',
    ApplicationPdf: 'application/pdf'
} as const;
export type HostMessageAttachmentMimeTypeEnum = typeof HostMessageAttachmentMimeTypeEnum[keyof typeof HostMessageAttachmentMimeTypeEnum];


/**
 * Check if a given object implements the HostMessage interface.
 */
export function instanceOfHostMessage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HostMessageFromJSON(json: any): HostMessage {
    return HostMessageFromJSONTyped(json, false);
}

export function HostMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): HostMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'bookingId': !exists(json, 'bookingId') ? undefined : json['bookingId'],
        'read': !exists(json, 'read') ? undefined : json['read'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'attachment': !exists(json, 'attachment') ? undefined : json['attachment'],
        'attachmentName': !exists(json, 'attachmentName') ? undefined : json['attachmentName'],
        'attachmentMimeType': !exists(json, 'attachmentMimeType') ? undefined : json['attachmentMimeType'],
    };
}

export function HostMessageToJSON(value?: HostMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'bookingId': value.bookingId,
        'read': value.read,
        'message': value.message,
        'attachment': value.attachment,
        'attachmentName': value.attachmentName,
        'attachmentMimeType': value.attachmentMimeType,
    };
}

