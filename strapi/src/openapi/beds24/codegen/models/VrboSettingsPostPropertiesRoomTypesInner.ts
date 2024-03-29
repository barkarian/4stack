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
import type { VrboSettingsPostPropertiesRoomTypesInnerPaymentSchedules } from './VrboSettingsPostPropertiesRoomTypesInnerPaymentSchedules';
import {
    VrboSettingsPostPropertiesRoomTypesInnerPaymentSchedulesFromJSON,
    VrboSettingsPostPropertiesRoomTypesInnerPaymentSchedulesFromJSONTyped,
    VrboSettingsPostPropertiesRoomTypesInnerPaymentSchedulesToJSON,
} from './VrboSettingsPostPropertiesRoomTypesInnerPaymentSchedules';
import type { VrboSettingsPostPropertiesRoomTypesInnerPriceRulesInner } from './VrboSettingsPostPropertiesRoomTypesInnerPriceRulesInner';
import {
    VrboSettingsPostPropertiesRoomTypesInnerPriceRulesInnerFromJSON,
    VrboSettingsPostPropertiesRoomTypesInnerPriceRulesInnerFromJSONTyped,
    VrboSettingsPostPropertiesRoomTypesInnerPriceRulesInnerToJSON,
} from './VrboSettingsPostPropertiesRoomTypesInnerPriceRulesInner';
import type { VrboSettingsPostPropertiesRoomTypesInnerSpecificRoomContent } from './VrboSettingsPostPropertiesRoomTypesInnerSpecificRoomContent';
import {
    VrboSettingsPostPropertiesRoomTypesInnerSpecificRoomContentFromJSON,
    VrboSettingsPostPropertiesRoomTypesInnerSpecificRoomContentFromJSONTyped,
    VrboSettingsPostPropertiesRoomTypesInnerSpecificRoomContentToJSON,
} from './VrboSettingsPostPropertiesRoomTypesInnerSpecificRoomContent';
import type { VrboSettingsPostPropertiesRoomTypesInnerVrboICal } from './VrboSettingsPostPropertiesRoomTypesInnerVrboICal';
import {
    VrboSettingsPostPropertiesRoomTypesInnerVrboICalFromJSON,
    VrboSettingsPostPropertiesRoomTypesInnerVrboICalFromJSONTyped,
    VrboSettingsPostPropertiesRoomTypesInnerVrboICalToJSON,
} from './VrboSettingsPostPropertiesRoomTypesInnerVrboICal';

/**
 * 
 * @export
 * @interface VrboSettingsPostPropertiesRoomTypesInner
 */
export interface VrboSettingsPostPropertiesRoomTypesInner {
    /**
     * 
     * @type {number}
     * @memberof VrboSettingsPostPropertiesRoomTypesInner
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof VrboSettingsPostPropertiesRoomTypesInner
     */
    syncronise?: boolean;
    /**
     * 
     * @type {VrboSettingsPostPropertiesRoomTypesInnerSpecificRoomContent}
     * @memberof VrboSettingsPostPropertiesRoomTypesInner
     */
    specificRoomContent?: VrboSettingsPostPropertiesRoomTypesInnerSpecificRoomContent;
    /**
     * 
     * @type {VrboSettingsPostPropertiesRoomTypesInnerPaymentSchedules}
     * @memberof VrboSettingsPostPropertiesRoomTypesInner
     */
    paymentSchedules?: VrboSettingsPostPropertiesRoomTypesInnerPaymentSchedules;
    /**
     * 
     * @type {VrboSettingsPostPropertiesRoomTypesInnerVrboICal}
     * @memberof VrboSettingsPostPropertiesRoomTypesInner
     */
    vrboICal?: VrboSettingsPostPropertiesRoomTypesInnerVrboICal;
    /**
     * 
     * @type {Array<VrboSettingsPostPropertiesRoomTypesInnerPriceRulesInner>}
     * @memberof VrboSettingsPostPropertiesRoomTypesInner
     */
    priceRules?: Array<VrboSettingsPostPropertiesRoomTypesInnerPriceRulesInner>;
}

/**
 * Check if a given object implements the VrboSettingsPostPropertiesRoomTypesInner interface.
 */
export function instanceOfVrboSettingsPostPropertiesRoomTypesInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VrboSettingsPostPropertiesRoomTypesInnerFromJSON(json: any): VrboSettingsPostPropertiesRoomTypesInner {
    return VrboSettingsPostPropertiesRoomTypesInnerFromJSONTyped(json, false);
}

export function VrboSettingsPostPropertiesRoomTypesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): VrboSettingsPostPropertiesRoomTypesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'syncronise': !exists(json, 'syncronise') ? undefined : json['syncronise'],
        'specificRoomContent': !exists(json, 'specificRoomContent') ? undefined : VrboSettingsPostPropertiesRoomTypesInnerSpecificRoomContentFromJSON(json['specificRoomContent']),
        'paymentSchedules': !exists(json, 'paymentSchedules') ? undefined : VrboSettingsPostPropertiesRoomTypesInnerPaymentSchedulesFromJSON(json['paymentSchedules']),
        'vrboICal': !exists(json, 'vrboICal') ? undefined : VrboSettingsPostPropertiesRoomTypesInnerVrboICalFromJSON(json['vrboICal']),
        'priceRules': !exists(json, 'priceRules') ? undefined : ((json['priceRules'] as Array<any>).map(VrboSettingsPostPropertiesRoomTypesInnerPriceRulesInnerFromJSON)),
    };
}

export function VrboSettingsPostPropertiesRoomTypesInnerToJSON(value?: VrboSettingsPostPropertiesRoomTypesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'syncronise': value.syncronise,
        'specificRoomContent': VrboSettingsPostPropertiesRoomTypesInnerSpecificRoomContentToJSON(value.specificRoomContent),
        'paymentSchedules': VrboSettingsPostPropertiesRoomTypesInnerPaymentSchedulesToJSON(value.paymentSchedules),
        'vrboICal': VrboSettingsPostPropertiesRoomTypesInnerVrboICalToJSON(value.vrboICal),
        'priceRules': value.priceRules === undefined ? undefined : ((value.priceRules as Array<any>).map(VrboSettingsPostPropertiesRoomTypesInnerPriceRulesInnerToJSON)),
    };
}

