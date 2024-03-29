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
 * @interface ICalImportSettingsPostAllOfProperties
 */
export interface ICalImportSettingsPostAllOfProperties {
    /**
     * 
     * @type {number}
     * @memberof ICalImportSettingsPostAllOfProperties
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ICalImportSettingsPostAllOfProperties
     */
    modificationNotification?: ICalImportSettingsPostAllOfPropertiesModificationNotificationEnum;
}


/**
 * @export
 */
export const ICalImportSettingsPostAllOfPropertiesModificationNotificationEnum = {
    ModificationAllowedBookingNotificationOnly: 'modificationAllowedBookingNotificationOnly',
    ModificationAllowedBookingCancelNotification: 'modificationAllowedBookingCancelNotification',
    ModificationAllowedNoEmailNotification: 'modificationAllowedNoEmailNotification',
    ModificationProhibitedBookingNotificationOnly: 'modificationProhibitedBookingNotificationOnly',
    ModificationProhibitedNoEmailNotification: 'modificationProhibitedNoEmailNotification'
} as const;
export type ICalImportSettingsPostAllOfPropertiesModificationNotificationEnum = typeof ICalImportSettingsPostAllOfPropertiesModificationNotificationEnum[keyof typeof ICalImportSettingsPostAllOfPropertiesModificationNotificationEnum];


/**
 * Check if a given object implements the ICalImportSettingsPostAllOfProperties interface.
 */
export function instanceOfICalImportSettingsPostAllOfProperties(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ICalImportSettingsPostAllOfPropertiesFromJSON(json: any): ICalImportSettingsPostAllOfProperties {
    return ICalImportSettingsPostAllOfPropertiesFromJSONTyped(json, false);
}

export function ICalImportSettingsPostAllOfPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ICalImportSettingsPostAllOfProperties {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'modificationNotification': !exists(json, 'modificationNotification') ? undefined : json['modificationNotification'],
    };
}

export function ICalImportSettingsPostAllOfPropertiesToJSON(value?: ICalImportSettingsPostAllOfProperties | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'modificationNotification': value.modificationNotification,
    };
}

