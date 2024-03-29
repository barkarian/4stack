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


import * as runtime from '../runtime';
import type {
  BookingsPost201ResponseInner,
  Calendar,
  InventoryRoomsAvailabilityGet200Response,
  InventoryRoomsCalendarGet200Response,
  InventoryRoomsOffersGet200Response,
  UnsuccessfulApiResponse,
} from '../models/index';
import {
    BookingsPost201ResponseInnerFromJSON,
    BookingsPost201ResponseInnerToJSON,
    CalendarFromJSON,
    CalendarToJSON,
    InventoryRoomsAvailabilityGet200ResponseFromJSON,
    InventoryRoomsAvailabilityGet200ResponseToJSON,
    InventoryRoomsCalendarGet200ResponseFromJSON,
    InventoryRoomsCalendarGet200ResponseToJSON,
    InventoryRoomsOffersGet200ResponseFromJSON,
    InventoryRoomsOffersGet200ResponseToJSON,
    UnsuccessfulApiResponseFromJSON,
    UnsuccessfulApiResponseToJSON,
} from '../models/index';

export interface InventoryRoomsAvailabilityGetRequest {
    roomId?: Array<number>;
    propertyId?: Array<number>;
    startDate?: Date;
    endDate?: Date;
    page?: number;
}

export interface InventoryRoomsCalendarGetRequest {
    startDate: Date;
    endDate: Date;
    roomId?: Array<number>;
    propertyId?: Array<number>;
    includeNumAvail?: boolean;
    includeMinStay?: boolean;
    includeMaxStay?: boolean;
    includeMultiplier?: boolean;
    includeOverride?: boolean;
    includePrices?: boolean;
    includeLinkedPrices?: boolean;
    includeChannels?: boolean;
    page?: number;
}

export interface InventoryRoomsCalendarPostRequest {
    calendar?: Array<Calendar>;
}

export interface InventoryRoomsOffersGetRequest {
    arrival: string;
    departure: string;
    numAdults: number;
    propertyId?: Array<number>;
    roomId?: Array<number>;
    offerId?: Array<number>;
    numChildren?: number;
    includeTexts?: Array<string>;
    page?: number;
}

/**
 * 
 */
export class InventoryApi extends runtime.BaseAPI {

    /**
     * Get the availability status of dates
     */
    async inventoryRoomsAvailabilityGetRaw(requestParameters: InventoryRoomsAvailabilityGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryRoomsAvailabilityGet200Response>> {
        const queryParameters: any = {};

        if (requestParameters.roomId) {
            queryParameters['roomId'] = requestParameters.roomId;
        }

        if (requestParameters.propertyId) {
            queryParameters['propertyId'] = requestParameters.propertyId;
        }

        if (requestParameters.startDate !== undefined) {
            queryParameters['startDate'] = (requestParameters.startDate as any).toISOString().substring(0,10);
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['endDate'] = (requestParameters.endDate as any).toISOString().substring(0,10);
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = await this.configuration.apiKey("token"); // token authentication
        }

        const response = await this.request({
            path: `/inventory/rooms/availability`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InventoryRoomsAvailabilityGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Get the availability status of dates
     */
    async inventoryRoomsAvailabilityGet(requestParameters: InventoryRoomsAvailabilityGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryRoomsAvailabilityGet200Response> {
        const response = await this.inventoryRoomsAvailabilityGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * By default no data will be returned. You should include at least one includeX parameter.
     * Get\'s per day values
     */
    async inventoryRoomsCalendarGetRaw(requestParameters: InventoryRoomsCalendarGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryRoomsCalendarGet200Response>> {
        if (requestParameters.startDate === null || requestParameters.startDate === undefined) {
            throw new runtime.RequiredError('startDate','Required parameter requestParameters.startDate was null or undefined when calling inventoryRoomsCalendarGet.');
        }

        if (requestParameters.endDate === null || requestParameters.endDate === undefined) {
            throw new runtime.RequiredError('endDate','Required parameter requestParameters.endDate was null or undefined when calling inventoryRoomsCalendarGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.startDate !== undefined) {
            queryParameters['startDate'] = (requestParameters.startDate as any).toISOString().substring(0,10);
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['endDate'] = (requestParameters.endDate as any).toISOString().substring(0,10);
        }

        if (requestParameters.roomId) {
            queryParameters['roomId'] = requestParameters.roomId;
        }

        if (requestParameters.propertyId) {
            queryParameters['propertyId'] = requestParameters.propertyId;
        }

        if (requestParameters.includeNumAvail !== undefined) {
            queryParameters['includeNumAvail'] = requestParameters.includeNumAvail;
        }

        if (requestParameters.includeMinStay !== undefined) {
            queryParameters['includeMinStay'] = requestParameters.includeMinStay;
        }

        if (requestParameters.includeMaxStay !== undefined) {
            queryParameters['includeMaxStay'] = requestParameters.includeMaxStay;
        }

        if (requestParameters.includeMultiplier !== undefined) {
            queryParameters['includeMultiplier'] = requestParameters.includeMultiplier;
        }

        if (requestParameters.includeOverride !== undefined) {
            queryParameters['includeOverride'] = requestParameters.includeOverride;
        }

        if (requestParameters.includePrices !== undefined) {
            queryParameters['includePrices'] = requestParameters.includePrices;
        }

        if (requestParameters.includeLinkedPrices !== undefined) {
            queryParameters['includeLinkedPrices'] = requestParameters.includeLinkedPrices;
        }

        if (requestParameters.includeChannels !== undefined) {
            queryParameters['includeChannels'] = requestParameters.includeChannels;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = await this.configuration.apiKey("token"); // token authentication
        }

        const response = await this.request({
            path: `/inventory/rooms/calendar`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InventoryRoomsCalendarGet200ResponseFromJSON(jsonValue));
    }

    /**
     * By default no data will be returned. You should include at least one includeX parameter.
     * Get\'s per day values
     */
    async inventoryRoomsCalendarGet(requestParameters: InventoryRoomsCalendarGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryRoomsCalendarGet200Response> {
        const response = await this.inventoryRoomsCalendarGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Modify per day values
     */
    async inventoryRoomsCalendarPostRaw(requestParameters: InventoryRoomsCalendarPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BookingsPost201ResponseInner>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = await this.configuration.apiKey("token"); // token authentication
        }

        const response = await this.request({
            path: `/inventory/rooms/calendar`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.calendar.map(CalendarToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BookingsPost201ResponseInnerFromJSON));
    }

    /**
     * Modify per day values
     */
    async inventoryRoomsCalendarPost(requestParameters: InventoryRoomsCalendarPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BookingsPost201ResponseInner>> {
        const response = await this.inventoryRoomsCalendarPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get offer based on specified criteria
     */
    async inventoryRoomsOffersGetRaw(requestParameters: InventoryRoomsOffersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InventoryRoomsOffersGet200Response>> {
        if (requestParameters.arrival === null || requestParameters.arrival === undefined) {
            throw new runtime.RequiredError('arrival','Required parameter requestParameters.arrival was null or undefined when calling inventoryRoomsOffersGet.');
        }

        if (requestParameters.departure === null || requestParameters.departure === undefined) {
            throw new runtime.RequiredError('departure','Required parameter requestParameters.departure was null or undefined when calling inventoryRoomsOffersGet.');
        }

        if (requestParameters.numAdults === null || requestParameters.numAdults === undefined) {
            throw new runtime.RequiredError('numAdults','Required parameter requestParameters.numAdults was null or undefined when calling inventoryRoomsOffersGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.propertyId) {
            queryParameters['propertyId'] = requestParameters.propertyId;
        }

        if (requestParameters.roomId) {
            queryParameters['roomId'] = requestParameters.roomId;
        }

        if (requestParameters.offerId) {
            queryParameters['offerId'] = requestParameters.offerId;
        }

        if (requestParameters.arrival !== undefined) {
            queryParameters['arrival'] = requestParameters.arrival;
        }

        if (requestParameters.departure !== undefined) {
            queryParameters['departure'] = requestParameters.departure;
        }

        if (requestParameters.numAdults !== undefined) {
            queryParameters['numAdults'] = requestParameters.numAdults;
        }

        if (requestParameters.numChildren !== undefined) {
            queryParameters['numChildren'] = requestParameters.numChildren;
        }

        if (requestParameters.includeTexts) {
            queryParameters['includeTexts'] = requestParameters.includeTexts;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = await this.configuration.apiKey("token"); // token authentication
        }

        const response = await this.request({
            path: `/inventory/rooms/offers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InventoryRoomsOffersGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Get offer based on specified criteria
     */
    async inventoryRoomsOffersGet(requestParameters: InventoryRoomsOffersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InventoryRoomsOffersGet200Response> {
        const response = await this.inventoryRoomsOffersGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
