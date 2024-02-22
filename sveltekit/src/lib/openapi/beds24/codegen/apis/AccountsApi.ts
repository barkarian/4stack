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
  Account,
  AccountsGet200Response,
  BookingsPost201ResponseInner,
  UnsuccessfulApiResponse,
} from '../models/index';
import {
    AccountFromJSON,
    AccountToJSON,
    AccountsGet200ResponseFromJSON,
    AccountsGet200ResponseToJSON,
    BookingsPost201ResponseInnerFromJSON,
    BookingsPost201ResponseInnerToJSON,
    UnsuccessfulApiResponseFromJSON,
    UnsuccessfulApiResponseToJSON,
} from '../models/index';

export interface AccountsGetRequest {
    includeSubAccounts?: boolean;
    includeLanguages?: Array<AccountsGetIncludeLanguagesEnum>;
}

export interface AccountsPostRequest {
    account?: Array<Account>;
}

/**
 * 
 */
export class AccountsApi extends runtime.BaseAPI {

    /**
     * Under construction - Get accounts
     */
    async accountsGetRaw(requestParameters: AccountsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountsGet200Response>> {
        const queryParameters: any = {};

        if (requestParameters.includeSubAccounts !== undefined) {
            queryParameters['includeSubAccounts'] = requestParameters.includeSubAccounts;
        }

        if (requestParameters.includeLanguages) {
            queryParameters['includeLanguages'] = requestParameters.includeLanguages;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = await this.configuration.apiKey("token"); // token authentication
        }

        const response = await this.request({
            path: `/accounts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Under construction - Get accounts
     */
    async accountsGet(requestParameters: AccountsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountsGet200Response> {
        const response = await this.accountsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Under construction - Create or modify accounts
     */
    async accountsPostRaw(requestParameters: AccountsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<BookingsPost201ResponseInner>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = await this.configuration.apiKey("token"); // token authentication
        }

        const response = await this.request({
            path: `/accounts`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.account.map(AccountToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BookingsPost201ResponseInnerFromJSON));
    }

    /**
     * Under construction - Create or modify accounts
     */
    async accountsPost(requestParameters: AccountsPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<BookingsPost201ResponseInner>> {
        const response = await this.accountsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AccountsGetIncludeLanguagesEnum = {
    All: 'all',
    En: 'en',
    Ar: 'ar',
    Bg: 'bg',
    Ca: 'ca',
    Cs: 'cs',
    Da: 'da',
    De: 'de',
    El: 'el',
    Es: 'es',
    Et: 'et',
    Fi: 'fi',
    Fr: 'fr',
    Hr: 'hr',
    He: 'he',
    Hu: 'hu',
    Id: 'id',
    Is: 'is',
    It: 'it',
    Ja: 'ja',
    Ko: 'ko',
    Lt: 'lt',
    Mn: 'mn',
    My: 'my',
    Nl: 'nl',
    No: 'no',
    Pl: 'pl',
    Pt: 'pt',
    Ro: 'ro',
    Ru: 'ru',
    Sk: 'sk',
    Sl: 'sl',
    Sr: 'sr',
    Sv: 'sv',
    Th: 'th',
    Tr: 'tr',
    Vi: 'vi',
    Zh: 'zh',
    Zt: 'zt'
} as const;
export type AccountsGetIncludeLanguagesEnum = typeof AccountsGetIncludeLanguagesEnum[keyof typeof AccountsGetIncludeLanguagesEnum];