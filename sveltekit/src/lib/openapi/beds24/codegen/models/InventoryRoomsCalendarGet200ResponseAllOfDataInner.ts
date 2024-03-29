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
import type { CalendarCalendarInner } from './CalendarCalendarInner';
import {
    CalendarCalendarInnerFromJSON,
    CalendarCalendarInnerFromJSONTyped,
    CalendarCalendarInnerToJSON,
} from './CalendarCalendarInner';

/**
 * 
 * @export
 * @interface InventoryRoomsCalendarGet200ResponseAllOfDataInner
 */
export interface InventoryRoomsCalendarGet200ResponseAllOfDataInner {
    /**
     * 
     * @type {number}
     * @memberof InventoryRoomsCalendarGet200ResponseAllOfDataInner
     */
    roomId?: number;
    /**
     * You must specify via query parameters the fields to be returned, otherwise calendar will be an empty array.
     * @type {Array<CalendarCalendarInner>}
     * @memberof InventoryRoomsCalendarGet200ResponseAllOfDataInner
     */
    calendar?: Array<CalendarCalendarInner>;
    /**
     * 
     * @type {number}
     * @memberof InventoryRoomsCalendarGet200ResponseAllOfDataInner
     */
    propertyId?: number;
}

/**
 * Check if a given object implements the InventoryRoomsCalendarGet200ResponseAllOfDataInner interface.
 */
export function instanceOfInventoryRoomsCalendarGet200ResponseAllOfDataInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function InventoryRoomsCalendarGet200ResponseAllOfDataInnerFromJSON(json: any): InventoryRoomsCalendarGet200ResponseAllOfDataInner {
    return InventoryRoomsCalendarGet200ResponseAllOfDataInnerFromJSONTyped(json, false);
}

export function InventoryRoomsCalendarGet200ResponseAllOfDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): InventoryRoomsCalendarGet200ResponseAllOfDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'calendar': !exists(json, 'calendar') ? undefined : ((json['calendar'] as Array<any>).map(CalendarCalendarInnerFromJSON)),
        'propertyId': !exists(json, 'propertyId') ? undefined : json['propertyId'],
    };
}

export function InventoryRoomsCalendarGet200ResponseAllOfDataInnerToJSON(value?: InventoryRoomsCalendarGet200ResponseAllOfDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'roomId': value.roomId,
        'calendar': value.calendar === undefined ? undefined : ((value.calendar as Array<any>).map(CalendarCalendarInnerToJSON)),
        'propertyId': value.propertyId,
    };
}

