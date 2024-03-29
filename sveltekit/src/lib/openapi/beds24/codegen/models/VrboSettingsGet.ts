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
import type { VrboSettingsGetAllOfProperties } from './VrboSettingsGetAllOfProperties';
import {
    VrboSettingsGetAllOfPropertiesFromJSON,
    VrboSettingsGetAllOfPropertiesFromJSONTyped,
    VrboSettingsGetAllOfPropertiesToJSON,
} from './VrboSettingsGetAllOfProperties';

/**
 * 
 * @export
 * @interface VrboSettingsGet
 */
export interface VrboSettingsGet {
    /**
     * 
     * @type {string}
     * @memberof VrboSettingsGet
     */
    channel?: string;
    /**
     * 
     * @type {string}
     * @memberof VrboSettingsGet
     */
    currency?: VrboSettingsGetCurrencyEnum;
    /**
     * 
     * @type {string}
     * @memberof VrboSettingsGet
     */
    rentalAgreementPdfUri?: string;
    /**
     * 
     * @type {VrboSettingsGetAllOfProperties}
     * @memberof VrboSettingsGet
     */
    properties?: VrboSettingsGetAllOfProperties;
}


/**
 * @export
 */
export const VrboSettingsGetCurrencyEnum = {
    Usd: 'USD',
    Aud: 'AUD',
    Brl: 'BRL',
    Cad: 'CAD',
    Eur: 'EUR',
    Gbp: 'GBP',
    Jpy: 'JPY'
} as const;
export type VrboSettingsGetCurrencyEnum = typeof VrboSettingsGetCurrencyEnum[keyof typeof VrboSettingsGetCurrencyEnum];


/**
 * Check if a given object implements the VrboSettingsGet interface.
 */
export function instanceOfVrboSettingsGet(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VrboSettingsGetFromJSON(json: any): VrboSettingsGet {
    return VrboSettingsGetFromJSONTyped(json, false);
}

export function VrboSettingsGetFromJSONTyped(json: any, ignoreDiscriminator: boolean): VrboSettingsGet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'rentalAgreementPdfUri': !exists(json, 'rentalAgreementPdfUri') ? undefined : json['rentalAgreementPdfUri'],
        'properties': !exists(json, 'properties') ? undefined : VrboSettingsGetAllOfPropertiesFromJSON(json['properties']),
    };
}

export function VrboSettingsGetToJSON(value?: VrboSettingsGet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channel': value.channel,
        'currency': value.currency,
        'rentalAgreementPdfUri': value.rentalAgreementPdfUri,
        'properties': VrboSettingsGetAllOfPropertiesToJSON(value.properties),
    };
}

