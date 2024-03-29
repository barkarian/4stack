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
import type { VrboSettingsPostProperties } from './VrboSettingsPostProperties';
import {
    VrboSettingsPostPropertiesFromJSON,
    VrboSettingsPostPropertiesFromJSONTyped,
    VrboSettingsPostPropertiesToJSON,
} from './VrboSettingsPostProperties';

/**
 * 
 * @export
 * @interface VrboSettingsPost
 */
export interface VrboSettingsPost {
    /**
     * 
     * @type {string}
     * @memberof VrboSettingsPost
     */
    channel?: string;
    /**
     * 
     * @type {string}
     * @memberof VrboSettingsPost
     */
    currency?: VrboSettingsPostCurrencyEnum;
    /**
     * 
     * @type {string}
     * @memberof VrboSettingsPost
     */
    rentalAgreementPdfUri?: string;
    /**
     * 
     * @type {VrboSettingsPostProperties}
     * @memberof VrboSettingsPost
     */
    properties?: VrboSettingsPostProperties;
}


/**
 * @export
 */
export const VrboSettingsPostCurrencyEnum = {
    Usd: 'USD',
    Aud: 'AUD',
    Brl: 'BRL',
    Cad: 'CAD',
    Eur: 'EUR',
    Gbp: 'GBP',
    Jpy: 'JPY'
} as const;
export type VrboSettingsPostCurrencyEnum = typeof VrboSettingsPostCurrencyEnum[keyof typeof VrboSettingsPostCurrencyEnum];


/**
 * Check if a given object implements the VrboSettingsPost interface.
 */
export function instanceOfVrboSettingsPost(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VrboSettingsPostFromJSON(json: any): VrboSettingsPost {
    return VrboSettingsPostFromJSONTyped(json, false);
}

export function VrboSettingsPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): VrboSettingsPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'rentalAgreementPdfUri': !exists(json, 'rentalAgreementPdfUri') ? undefined : json['rentalAgreementPdfUri'],
        'properties': !exists(json, 'properties') ? undefined : VrboSettingsPostPropertiesFromJSON(json['properties']),
    };
}

export function VrboSettingsPostToJSON(value?: VrboSettingsPost | null): any {
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
        'properties': VrboSettingsPostPropertiesToJSON(value.properties),
    };
}

