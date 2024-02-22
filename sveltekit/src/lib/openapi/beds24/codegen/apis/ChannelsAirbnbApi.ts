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
  ChannelsAirbnbListingsGet200Response,
  ChannelsAirbnbPostRequestInner,
  ChannelsAirbnbUsersGet200Response,
  UnsuccessfulApiResponse,
} from '../models/index';
import {
    BookingsPost201ResponseInnerFromJSON,
    BookingsPost201ResponseInnerToJSON,
    ChannelsAirbnbListingsGet200ResponseFromJSON,
    ChannelsAirbnbListingsGet200ResponseToJSON,
    ChannelsAirbnbPostRequestInnerFromJSON,
    ChannelsAirbnbPostRequestInnerToJSON,
    ChannelsAirbnbUsersGet200ResponseFromJSON,
    ChannelsAirbnbUsersGet200ResponseToJSON,
    UnsuccessfulApiResponseFromJSON,
    UnsuccessfulApiResponseToJSON,
} from '../models/index';

export interface ChannelsAirbnbListingsGetRequest {
    airbnbUserId: string;
    airbnbListingId?: string;
    airbnbApiVersion?: string;
}

export interface ChannelsAirbnbPostRequest {
    channelsAirbnbPostRequestInner?: Array<ChannelsAirbnbPostRequestInner>;
}

/**
 * 
 */
export class ChannelsAirbnbApi extends runtime.BaseAPI {

    /**
     * Note: the response will include additional data from Airbnb\'s API that is not specified in the example.
     * Under construction - Get all Airbnb listings for a specified Airbnb user id
     */
    async channelsAirbnbListingsGetRaw(requestParameters: ChannelsAirbnbListingsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsAirbnbListingsGet200Response>> {
        if (requestParameters.airbnbUserId === null || requestParameters.airbnbUserId === undefined) {
            throw new runtime.RequiredError('airbnbUserId','Required parameter requestParameters.airbnbUserId was null or undefined when calling channelsAirbnbListingsGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.airbnbUserId !== undefined) {
            queryParameters['airbnbUserId'] = requestParameters.airbnbUserId;
        }

        if (requestParameters.airbnbListingId !== undefined) {
            queryParameters['airbnbListingId'] = requestParameters.airbnbListingId;
        }

        if (requestParameters.airbnbApiVersion !== undefined) {
            queryParameters['airbnbApiVersion'] = requestParameters.airbnbApiVersion;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = await this.configuration.apiKey("token"); // token authentication
        }

        const response = await this.request({
            path: `/channels/airbnb/listings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsAirbnbListingsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Note: the response will include additional data from Airbnb\'s API that is not specified in the example.
     * Under construction - Get all Airbnb listings for a specified Airbnb user id
     */
    async channelsAirbnbListingsGet(requestParameters: ChannelsAirbnbListingsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsAirbnbListingsGet200Response> {
        const response = await this.channelsAirbnbListingsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Under construction - Perform actions at Airbnb
     */
    async channelsAirbnbPostRaw(requestParameters: ChannelsAirbnbPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BookingsPost201ResponseInner>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = await this.configuration.apiKey("token"); // token authentication
        }

        const response = await this.request({
            path: `/channels/airbnb`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.channelsAirbnbPostRequestInner.map(ChannelsAirbnbPostRequestInnerToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BookingsPost201ResponseInnerFromJSON));
    }

    /**
     * Under construction - Perform actions at Airbnb
     */
    async channelsAirbnbPost(requestParameters: ChannelsAirbnbPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BookingsPost201ResponseInner>> {
        const response = await this.channelsAirbnbPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Beta - Get all Airbnb user ids connected to an account
     */
    async channelsAirbnbUsersGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsAirbnbUsersGet200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = await this.configuration.apiKey("token"); // token authentication
        }

        const response = await this.request({
            path: `/channels/airbnb/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsAirbnbUsersGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Beta - Get all Airbnb user ids connected to an account
     */
    async channelsAirbnbUsersGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsAirbnbUsersGet200Response> {
        const response = await this.channelsAirbnbUsersGetRaw(initOverrides);
        return await response.value();
    }

}