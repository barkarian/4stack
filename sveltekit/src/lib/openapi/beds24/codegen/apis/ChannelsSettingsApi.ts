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
  ChannelsSettingsGet200Response,
  ChannelsSettingsPostRequestInner,
  UnsuccessfulApiResponse,
} from '../models/index';
import {
    BookingsPost201ResponseInnerFromJSON,
    BookingsPost201ResponseInnerToJSON,
    ChannelsSettingsGet200ResponseFromJSON,
    ChannelsSettingsGet200ResponseToJSON,
    ChannelsSettingsPostRequestInnerFromJSON,
    ChannelsSettingsPostRequestInnerToJSON,
    UnsuccessfulApiResponseFromJSON,
    UnsuccessfulApiResponseToJSON,
} from '../models/index';

export interface ChannelsSettingsGetRequest {
    propertyId: string;
    roomId?: Array<number>;
    channel?: Array<ChannelsSettingsGetChannelEnum>;
}

export interface ChannelsSettingsPostRequest {
    channelsSettingsPostRequestInner?: Array<ChannelsSettingsPostRequestInner>;
}

/**
 * 
 */
export class ChannelsSettingsApi extends runtime.BaseAPI {

    /**
     * Under construction - Get channel settings
     */
    async channelsSettingsGetRaw(requestParameters: ChannelsSettingsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsSettingsGet200Response>> {
        if (requestParameters.propertyId === null || requestParameters.propertyId === undefined) {
            throw new runtime.RequiredError('propertyId','Required parameter requestParameters.propertyId was null or undefined when calling channelsSettingsGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.propertyId !== undefined) {
            queryParameters['propertyId'] = requestParameters.propertyId;
        }

        if (requestParameters.roomId) {
            queryParameters['roomId'] = requestParameters.roomId;
        }

        if (requestParameters.channel) {
            queryParameters['channel'] = requestParameters.channel;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = await this.configuration.apiKey("token"); // token authentication
        }

        const response = await this.request({
            path: `/channels/settings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsSettingsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Under construction - Get channel settings
     */
    async channelsSettingsGet(requestParameters: ChannelsSettingsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsSettingsGet200Response> {
        const response = await this.channelsSettingsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Under construction - Set channel settings
     */
    async channelsSettingsPostRaw(requestParameters: ChannelsSettingsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BookingsPost201ResponseInner>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = await this.configuration.apiKey("token"); // token authentication
        }

        const response = await this.request({
            path: `/channels/settings`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.channelsSettingsPostRequestInner.map(ChannelsSettingsPostRequestInnerToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BookingsPost201ResponseInnerFromJSON));
    }

    /**
     * Under construction - Set channel settings
     */
    async channelsSettingsPost(requestParameters: ChannelsSettingsPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BookingsPost201ResponseInner>> {
        const response = await this.channelsSettingsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ChannelsSettingsGetChannelEnum = {
    ICalExport: 'iCalExport',
    ICalImport: 'iCalImport',
    Airbnb: 'airbnb'
} as const;
export type ChannelsSettingsGetChannelEnum = typeof ChannelsSettingsGetChannelEnum[keyof typeof ChannelsSettingsGetChannelEnum];