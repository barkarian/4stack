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
  ChannelsStripeChargesGet200Response,
  ChannelsStripePaymentMethodsGet200Response,
  ChannelsStripePostRequestInner,
  UnsuccessfulApiResponse,
} from '../models/index';
import {
    BookingsPost201ResponseInnerFromJSON,
    BookingsPost201ResponseInnerToJSON,
    ChannelsStripeChargesGet200ResponseFromJSON,
    ChannelsStripeChargesGet200ResponseToJSON,
    ChannelsStripePaymentMethodsGet200ResponseFromJSON,
    ChannelsStripePaymentMethodsGet200ResponseToJSON,
    ChannelsStripePostRequestInnerFromJSON,
    ChannelsStripePostRequestInnerToJSON,
    UnsuccessfulApiResponseFromJSON,
    UnsuccessfulApiResponseToJSON,
} from '../models/index';

export interface ChannelsStripeChargesGetRequest {
    bookingId: number;
    stripeChargeId?: string;
    stripeApiVersion?: string;
}

export interface ChannelsStripePaymentMethodsGetRequest {
    bookingId: number;
    stripePaymentMethodId?: string;
    stripeApiVersion?: string;
}

export interface ChannelsStripePostRequest {
    channelsStripePostRequestInner?: Array<ChannelsStripePostRequestInner>;
}

/**
 * 
 */
export class ChannelsStripeApi extends runtime.BaseAPI {

    /**
     * Note: the response will include additional data from Stripe\'s API that is not specified in the example.
     * Under construction
     */
    async channelsStripeChargesGetRaw(requestParameters: ChannelsStripeChargesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsStripeChargesGet200Response>> {
        if (requestParameters.bookingId === null || requestParameters.bookingId === undefined) {
            throw new runtime.RequiredError('bookingId','Required parameter requestParameters.bookingId was null or undefined when calling channelsStripeChargesGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.bookingId !== undefined) {
            queryParameters['bookingId'] = requestParameters.bookingId;
        }

        if (requestParameters.stripeChargeId !== undefined) {
            queryParameters['stripeChargeId'] = requestParameters.stripeChargeId;
        }

        if (requestParameters.stripeApiVersion !== undefined) {
            queryParameters['stripeApiVersion'] = requestParameters.stripeApiVersion;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = await this.configuration.apiKey("token"); // token authentication
        }

        const response = await this.request({
            path: `/channels/stripe/charges`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsStripeChargesGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Note: the response will include additional data from Stripe\'s API that is not specified in the example.
     * Under construction
     */
    async channelsStripeChargesGet(requestParameters: ChannelsStripeChargesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsStripeChargesGet200Response> {
        const response = await this.channelsStripeChargesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Note: the response will include additional data from Stripe\'s API that is not specified in the example.
     * Under construction
     */
    async channelsStripePaymentMethodsGetRaw(requestParameters: ChannelsStripePaymentMethodsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsStripePaymentMethodsGet200Response>> {
        if (requestParameters.bookingId === null || requestParameters.bookingId === undefined) {
            throw new runtime.RequiredError('bookingId','Required parameter requestParameters.bookingId was null or undefined when calling channelsStripePaymentMethodsGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.bookingId !== undefined) {
            queryParameters['bookingId'] = requestParameters.bookingId;
        }

        if (requestParameters.stripePaymentMethodId !== undefined) {
            queryParameters['stripePaymentMethodId'] = requestParameters.stripePaymentMethodId;
        }

        if (requestParameters.stripeApiVersion !== undefined) {
            queryParameters['stripeApiVersion'] = requestParameters.stripeApiVersion;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = await this.configuration.apiKey("token"); // token authentication
        }

        const response = await this.request({
            path: `/channels/stripe/paymentMethods`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsStripePaymentMethodsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Note: the response will include additional data from Stripe\'s API that is not specified in the example.
     * Under construction
     */
    async channelsStripePaymentMethodsGet(requestParameters: ChannelsStripePaymentMethodsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsStripePaymentMethodsGet200Response> {
        const response = await this.channelsStripePaymentMethodsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Under construction - Perform actions at Stripe
     */
    async channelsStripePostRaw(requestParameters: ChannelsStripePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BookingsPost201ResponseInner>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = await this.configuration.apiKey("token"); // token authentication
        }

        const response = await this.request({
            path: `/channels/stripe`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.channelsStripePostRequestInner.map(ChannelsStripePostRequestInnerToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BookingsPost201ResponseInnerFromJSON));
    }

    /**
     * Under construction - Perform actions at Stripe
     */
    async channelsStripePost(requestParameters: ChannelsStripePostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BookingsPost201ResponseInner>> {
        const response = await this.channelsStripePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
