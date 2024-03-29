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
import type { Offer } from './Offer';
import {
    OfferFromJSON,
    OfferFromJSONTyped,
    OfferToJSON,
} from './Offer';
import type { PropertyAccount } from './PropertyAccount';
import {
    PropertyAccountFromJSON,
    PropertyAccountFromJSONTyped,
    PropertyAccountToJSON,
} from './PropertyAccount';
import type { PropertyBookingQuestions } from './PropertyBookingQuestions';
import {
    PropertyBookingQuestionsFromJSON,
    PropertyBookingQuestionsFromJSONTyped,
    PropertyBookingQuestionsToJSON,
} from './PropertyBookingQuestions';
import type { PropertyBookingRules } from './PropertyBookingRules';
import {
    PropertyBookingRulesFromJSON,
    PropertyBookingRulesFromJSONTyped,
    PropertyBookingRulesToJSON,
} from './PropertyBookingRules';
import type { PropertyCardSettings } from './PropertyCardSettings';
import {
    PropertyCardSettingsFromJSON,
    PropertyCardSettingsFromJSONTyped,
    PropertyCardSettingsToJSON,
} from './PropertyCardSettings';
import type { PropertyDiscountVouchersInner } from './PropertyDiscountVouchersInner';
import {
    PropertyDiscountVouchersInnerFromJSON,
    PropertyDiscountVouchersInnerFromJSONTyped,
    PropertyDiscountVouchersInnerToJSON,
} from './PropertyDiscountVouchersInner';
import type { PropertyOneTimeVouchersInner } from './PropertyOneTimeVouchersInner';
import {
    PropertyOneTimeVouchersInnerFromJSON,
    PropertyOneTimeVouchersInnerFromJSONTyped,
    PropertyOneTimeVouchersInnerToJSON,
} from './PropertyOneTimeVouchersInner';
import type { PropertyPaymentCollection } from './PropertyPaymentCollection';
import {
    PropertyPaymentCollectionFromJSON,
    PropertyPaymentCollectionFromJSONTyped,
    PropertyPaymentCollectionToJSON,
} from './PropertyPaymentCollection';
import type { PropertyPaymentGateways } from './PropertyPaymentGateways';
import {
    PropertyPaymentGatewaysFromJSON,
    PropertyPaymentGatewaysFromJSONTyped,
    PropertyPaymentGatewaysToJSON,
} from './PropertyPaymentGateways';
import type { PropertyRoomTypesInner } from './PropertyRoomTypesInner';
import {
    PropertyRoomTypesInnerFromJSON,
    PropertyRoomTypesInnerFromJSONTyped,
    PropertyRoomTypesInnerToJSON,
} from './PropertyRoomTypesInner';
import type { PropertySearchCriteria } from './PropertySearchCriteria';
import {
    PropertySearchCriteriaFromJSON,
    PropertySearchCriteriaFromJSONTyped,
    PropertySearchCriteriaToJSON,
} from './PropertySearchCriteria';
import type { PropertyTemplates } from './PropertyTemplates';
import {
    PropertyTemplatesFromJSON,
    PropertyTemplatesFromJSONTyped,
    PropertyTemplatesToJSON,
} from './PropertyTemplates';
import type { PropertyTextsInner } from './PropertyTextsInner';
import {
    PropertyTextsInnerFromJSON,
    PropertyTextsInnerFromJSONTyped,
    PropertyTextsInnerToJSON,
} from './PropertyTextsInner';
import type { PropertyUpsellItemsInner } from './PropertyUpsellItemsInner';
import {
    PropertyUpsellItemsInnerFromJSON,
    PropertyUpsellItemsInnerFromJSONTyped,
    PropertyUpsellItemsInnerToJSON,
} from './PropertyUpsellItemsInner';

/**
 * 
 * @export
 * @interface Property
 */
export interface Property {
    /**
     * 
     * @type {PropertyAccount}
     * @memberof Property
     */
    account?: PropertyAccount;
    /**
     * 
     * @type {number}
     * @memberof Property
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    propertyType?: PropertyPropertyTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    currency?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    postcode?: string;
    /**
     * 
     * @type {number}
     * @memberof Property
     */
    latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof Property
     */
    longitude?: number;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    mobile?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    fax?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    web?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    contactFirstName?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    contactLastName?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    checkInStart?: PropertyCheckInStartEnum;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    checkInEnd?: PropertyCheckInEndEnum;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    checkOutEnd?: PropertyCheckOutEndEnum;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    offerType?: PropertyOfferTypeEnum;
    /**
     * Set to null to hide.
     * @type {number}
     * @memberof Property
     */
    sellPriority?: number | null;
    /**
     * Set to null to hide.
     * @type {number}
     * @memberof Property
     */
    controlPriority?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    bookingPageMultiplier?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    permit?: string;
    /**
     * 
     * @type {string}
     * @memberof Property
     */
    roomChargeDisplay?: PropertyRoomChargeDisplayEnum;
    /**
     * 
     * @type {PropertyTemplates}
     * @memberof Property
     */
    templates?: PropertyTemplates;
    /**
     * 
     * @type {PropertyBookingRules}
     * @memberof Property
     */
    bookingRules?: PropertyBookingRules;
    /**
     * 
     * @type {PropertyPaymentCollection}
     * @memberof Property
     */
    paymentCollection?: PropertyPaymentCollection;
    /**
     * 
     * @type {PropertyPaymentGateways}
     * @memberof Property
     */
    paymentGateways?: PropertyPaymentGateways;
    /**
     * 
     * @type {PropertyCardSettings}
     * @memberof Property
     */
    cardSettings?: PropertyCardSettings;
    /**
     * 
     * @type {Array<string>}
     * @memberof Property
     */
    groupKeywords?: Array<string>;
    /**
     * 
     * @type {Array<PropertyOneTimeVouchersInner>}
     * @memberof Property
     */
    oneTimeVouchers?: Array<PropertyOneTimeVouchersInner>;
    /**
     * 
     * @type {Array<PropertyDiscountVouchersInner>}
     * @memberof Property
     */
    discountVouchers?: Array<PropertyDiscountVouchersInner>;
    /**
     * 
     * @type {Array<Array<string>>}
     * @memberof Property
     */
    featureCodes?: Array<Array<string>>;
    /**
     * 
     * @type {Array<PropertyTextsInner>}
     * @memberof Property
     */
    texts?: Array<PropertyTextsInner>;
    /**
     * 
     * @type {Array<Offer>}
     * @memberof Property
     */
    offers?: Array<Offer>;
    /**
     * 
     * @type {Array<PropertyRoomTypesInner>}
     * @memberof Property
     */
    roomTypes?: Array<PropertyRoomTypesInner>;
    /**
     * 
     * @type {Array<PropertyUpsellItemsInner>}
     * @memberof Property
     */
    upsellItems?: Array<PropertyUpsellItemsInner>;
    /**
     * 
     * @type {PropertyBookingQuestions}
     * @memberof Property
     */
    bookingQuestions?: PropertyBookingQuestions;
    /**
     * 
     * @type {PropertySearchCriteria}
     * @memberof Property
     */
    searchCriteria?: PropertySearchCriteria;
}


/**
 * @export
 */
export const PropertyPropertyTypeEnum = {
    Apartment: 'apartment',
    BedAndBreakfast: 'bedAndBreakfast',
    Cabin: 'cabin',
    Guesthouse: 'guesthouse',
    Hostel: 'hostel',
    Hotel: 'hotel',
    House: 'house',
    Villa: 'villa',
    Aparthotel: 'aparthotel',
    Barn: 'barn',
    Boat: 'boat',
    BoutiqueHotel: 'boutiqueHotel',
    Building: 'building',
    Bungalow: 'bungalow',
    Camping: 'camping',
    Caravan: 'caravan',
    CasaParticular: 'casaParticular',
    Castle: 'castle',
    Chacara: 'chacara',
    Chalet: 'chalet',
    Chateau: 'chateau',
    Condo: 'condo',
    Cottage: 'cottage',
    House2: 'House',
    Estate: 'estate',
    Farmhouse: 'farmhouse',
    HeritageHotel: 'heritageHotel',
    HouseBoat: 'houseBoat',
    Lodge: 'lodge',
    Loft: 'loft',
    Mas: 'mas',
    Mill: 'mill',
    MobileHome: 'mobileHome',
    RecreationalVehicle: 'recreationalVehicle',
    Resort: 'resort',
    Riad: 'riad',
    ServicedApartment: 'servicedApartment',
    Studio: 'studio',
    Tent: 'tent',
    Tour: 'tour',
    Tower: 'tower',
    Townhome: 'townhome',
    TreeHouse: 'treeHouse',
    Yacht: 'yacht'
} as const;
export type PropertyPropertyTypeEnum = typeof PropertyPropertyTypeEnum[keyof typeof PropertyPropertyTypeEnum];

/**
 * @export
 */
export const PropertyCheckInStartEnum = {
    _0000: '00:00',
    _0015: '00:15',
    _0030: '00:30',
    _0045: '00:45',
    _0100: '01:00',
    _0115: '01:15',
    _0130: '01:30',
    _0145: '01:45',
    _0200: '02:00',
    _0215: '02:15',
    _0230: '02:30',
    _0245: '02:45',
    _0300: '03:00',
    _0315: '03:15',
    _0330: '03:30',
    _0345: '03:45',
    _0400: '04:00',
    _0415: '04:15',
    _0430: '04:30',
    _0445: '04:45',
    _0500: '05:00',
    _0515: '05:15',
    _0530: '05:30',
    _0545: '05:45',
    _0600: '06:00',
    _0615: '06:15',
    _0630: '06:30',
    _0645: '06:45',
    _0700: '07:00',
    _0715: '07:15',
    _0730: '07:30',
    _0745: '07:45',
    _0800: '08:00',
    _0815: '08:15',
    _0830: '08:30',
    _0845: '08:45',
    _0900: '09:00',
    _0915: '09:15',
    _0930: '09:30',
    _0945: '09:45',
    _1000: '10:00',
    _1015: '10:15',
    _1030: '10:30',
    _1045: '10:45',
    _1100: '11:00',
    _1115: '11:15',
    _1130: '11:30',
    _1145: '11:45',
    _1200: '12:00',
    _1215: '12:15',
    _1230: '12:30',
    _1245: '12:45',
    _1300: '13:00',
    _1315: '13:15',
    _1330: '13:30',
    _1345: '13:45',
    _1400: '14:00',
    _1415: '14:15',
    _1430: '14:30',
    _1445: '14:45',
    _1500: '15:00',
    _1515: '15:15',
    _1530: '15:30',
    _1545: '15:45',
    _1600: '16:00',
    _1615: '16:15',
    _1630: '16:30',
    _1645: '16:45',
    _1700: '17:00',
    _1715: '17:15',
    _1730: '17:30',
    _1745: '17:45',
    _1800: '18:00',
    _1815: '18:15',
    _1830: '18:30',
    _1845: '18:45',
    _1900: '19:00',
    _1915: '19:15',
    _1930: '19:30',
    _1945: '19:45',
    _2000: '20:00',
    _2015: '20:15',
    _2030: '20:30',
    _2045: '20:45',
    _2100: '21:00',
    _2115: '21:15',
    _2130: '21:30',
    _2145: '21:45',
    _2200: '22:00',
    _2215: '22:15',
    _2230: '22:30',
    _2245: '22:45',
    _2300: '23:00',
    _2315: '23:15',
    _2330: '23:30',
    _2345: '23:45',
    _2400: '24:00'
} as const;
export type PropertyCheckInStartEnum = typeof PropertyCheckInStartEnum[keyof typeof PropertyCheckInStartEnum];

/**
 * @export
 */
export const PropertyCheckInEndEnum = {
    _0000: '00:00',
    _0015: '00:15',
    _0030: '00:30',
    _0045: '00:45',
    _0100: '01:00',
    _0115: '01:15',
    _0130: '01:30',
    _0145: '01:45',
    _0200: '02:00',
    _0215: '02:15',
    _0230: '02:30',
    _0245: '02:45',
    _0300: '03:00',
    _0315: '03:15',
    _0330: '03:30',
    _0345: '03:45',
    _0400: '04:00',
    _0415: '04:15',
    _0430: '04:30',
    _0445: '04:45',
    _0500: '05:00',
    _0515: '05:15',
    _0530: '05:30',
    _0545: '05:45',
    _0600: '06:00',
    _0615: '06:15',
    _0630: '06:30',
    _0645: '06:45',
    _0700: '07:00',
    _0715: '07:15',
    _0730: '07:30',
    _0745: '07:45',
    _0800: '08:00',
    _0815: '08:15',
    _0830: '08:30',
    _0845: '08:45',
    _0900: '09:00',
    _0915: '09:15',
    _0930: '09:30',
    _0945: '09:45',
    _1000: '10:00',
    _1015: '10:15',
    _1030: '10:30',
    _1045: '10:45',
    _1100: '11:00',
    _1115: '11:15',
    _1130: '11:30',
    _1145: '11:45',
    _1200: '12:00',
    _1215: '12:15',
    _1230: '12:30',
    _1245: '12:45',
    _1300: '13:00',
    _1315: '13:15',
    _1330: '13:30',
    _1345: '13:45',
    _1400: '14:00',
    _1415: '14:15',
    _1430: '14:30',
    _1445: '14:45',
    _1500: '15:00',
    _1515: '15:15',
    _1530: '15:30',
    _1545: '15:45',
    _1600: '16:00',
    _1615: '16:15',
    _1630: '16:30',
    _1645: '16:45',
    _1700: '17:00',
    _1715: '17:15',
    _1730: '17:30',
    _1745: '17:45',
    _1800: '18:00',
    _1815: '18:15',
    _1830: '18:30',
    _1845: '18:45',
    _1900: '19:00',
    _1915: '19:15',
    _1930: '19:30',
    _1945: '19:45',
    _2000: '20:00',
    _2015: '20:15',
    _2030: '20:30',
    _2045: '20:45',
    _2100: '21:00',
    _2115: '21:15',
    _2130: '21:30',
    _2145: '21:45',
    _2200: '22:00',
    _2215: '22:15',
    _2230: '22:30',
    _2245: '22:45',
    _2300: '23:00',
    _2315: '23:15',
    _2330: '23:30',
    _2345: '23:45',
    _2400: '24:00'
} as const;
export type PropertyCheckInEndEnum = typeof PropertyCheckInEndEnum[keyof typeof PropertyCheckInEndEnum];

/**
 * @export
 */
export const PropertyCheckOutEndEnum = {
    _0000: '00:00',
    _0015: '00:15',
    _0030: '00:30',
    _0045: '00:45',
    _0100: '01:00',
    _0115: '01:15',
    _0130: '01:30',
    _0145: '01:45',
    _0200: '02:00',
    _0215: '02:15',
    _0230: '02:30',
    _0245: '02:45',
    _0300: '03:00',
    _0315: '03:15',
    _0330: '03:30',
    _0345: '03:45',
    _0400: '04:00',
    _0415: '04:15',
    _0430: '04:30',
    _0445: '04:45',
    _0500: '05:00',
    _0515: '05:15',
    _0530: '05:30',
    _0545: '05:45',
    _0600: '06:00',
    _0615: '06:15',
    _0630: '06:30',
    _0645: '06:45',
    _0700: '07:00',
    _0715: '07:15',
    _0730: '07:30',
    _0745: '07:45',
    _0800: '08:00',
    _0815: '08:15',
    _0830: '08:30',
    _0845: '08:45',
    _0900: '09:00',
    _0915: '09:15',
    _0930: '09:30',
    _0945: '09:45',
    _1000: '10:00',
    _1015: '10:15',
    _1030: '10:30',
    _1045: '10:45',
    _1100: '11:00',
    _1115: '11:15',
    _1130: '11:30',
    _1145: '11:45',
    _1200: '12:00',
    _1215: '12:15',
    _1230: '12:30',
    _1245: '12:45',
    _1300: '13:00',
    _1315: '13:15',
    _1330: '13:30',
    _1345: '13:45',
    _1400: '14:00',
    _1415: '14:15',
    _1430: '14:30',
    _1445: '14:45',
    _1500: '15:00',
    _1515: '15:15',
    _1530: '15:30',
    _1545: '15:45',
    _1600: '16:00',
    _1615: '16:15',
    _1630: '16:30',
    _1645: '16:45',
    _1700: '17:00',
    _1715: '17:15',
    _1730: '17:30',
    _1745: '17:45',
    _1800: '18:00',
    _1815: '18:15',
    _1830: '18:30',
    _1845: '18:45',
    _1900: '19:00',
    _1915: '19:15',
    _1930: '19:30',
    _1945: '19:45',
    _2000: '20:00',
    _2015: '20:15',
    _2030: '20:30',
    _2045: '20:45',
    _2100: '21:00',
    _2115: '21:15',
    _2130: '21:30',
    _2145: '21:45',
    _2200: '22:00',
    _2215: '22:15',
    _2230: '22:30',
    _2245: '22:45',
    _2300: '23:00',
    _2315: '23:15',
    _2330: '23:30',
    _2345: '23:45',
    _2400: '24:00'
} as const;
export type PropertyCheckOutEndEnum = typeof PropertyCheckOutEndEnum[keyof typeof PropertyCheckOutEndEnum];

/**
 * @export
 */
export const PropertyOfferTypeEnum = {
    PerRoom: 'perRoom',
    PerProperty: 'perProperty'
} as const;
export type PropertyOfferTypeEnum = typeof PropertyOfferTypeEnum[keyof typeof PropertyOfferTypeEnum];

/**
 * @export
 */
export const PropertyRoomChargeDisplayEnum = {
    OnePerBooking: 'onePerBooking',
    OnePerDate: 'onePerDate'
} as const;
export type PropertyRoomChargeDisplayEnum = typeof PropertyRoomChargeDisplayEnum[keyof typeof PropertyRoomChargeDisplayEnum];


/**
 * Check if a given object implements the Property interface.
 */
export function instanceOfProperty(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PropertyFromJSON(json: any): Property {
    return PropertyFromJSONTyped(json, false);
}

export function PropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Property {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account': !exists(json, 'account') ? undefined : PropertyAccountFromJSON(json['account']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'propertyType': !exists(json, 'propertyType') ? undefined : json['propertyType'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'postcode': !exists(json, 'postcode') ? undefined : json['postcode'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'mobile': !exists(json, 'mobile') ? undefined : json['mobile'],
        'fax': !exists(json, 'fax') ? undefined : json['fax'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'web': !exists(json, 'web') ? undefined : json['web'],
        'contactFirstName': !exists(json, 'contactFirstName') ? undefined : json['contactFirstName'],
        'contactLastName': !exists(json, 'contactLastName') ? undefined : json['contactLastName'],
        'checkInStart': !exists(json, 'checkInStart') ? undefined : json['checkInStart'],
        'checkInEnd': !exists(json, 'checkInEnd') ? undefined : json['checkInEnd'],
        'checkOutEnd': !exists(json, 'checkOutEnd') ? undefined : json['checkOutEnd'],
        'offerType': !exists(json, 'offerType') ? undefined : json['offerType'],
        'sellPriority': !exists(json, 'sellPriority') ? undefined : json['sellPriority'],
        'controlPriority': !exists(json, 'controlPriority') ? undefined : json['controlPriority'],
        'bookingPageMultiplier': !exists(json, 'bookingPageMultiplier') ? undefined : json['bookingPageMultiplier'],
        'permit': !exists(json, 'permit') ? undefined : json['permit'],
        'roomChargeDisplay': !exists(json, 'roomChargeDisplay') ? undefined : json['roomChargeDisplay'],
        'templates': !exists(json, 'templates') ? undefined : PropertyTemplatesFromJSON(json['templates']),
        'bookingRules': !exists(json, 'bookingRules') ? undefined : PropertyBookingRulesFromJSON(json['bookingRules']),
        'paymentCollection': !exists(json, 'paymentCollection') ? undefined : PropertyPaymentCollectionFromJSON(json['paymentCollection']),
        'paymentGateways': !exists(json, 'paymentGateways') ? undefined : PropertyPaymentGatewaysFromJSON(json['paymentGateways']),
        'cardSettings': !exists(json, 'cardSettings') ? undefined : PropertyCardSettingsFromJSON(json['cardSettings']),
        'groupKeywords': !exists(json, 'groupKeywords') ? undefined : json['groupKeywords'],
        'oneTimeVouchers': !exists(json, 'oneTimeVouchers') ? undefined : ((json['oneTimeVouchers'] as Array<any>).map(PropertyOneTimeVouchersInnerFromJSON)),
        'discountVouchers': !exists(json, 'discountVouchers') ? undefined : ((json['discountVouchers'] as Array<any>).map(PropertyDiscountVouchersInnerFromJSON)),
        'featureCodes': !exists(json, 'featureCodes') ? undefined : json['featureCodes'],
        'texts': !exists(json, 'texts') ? undefined : ((json['texts'] as Array<any>).map(PropertyTextsInnerFromJSON)),
        'offers': !exists(json, 'offers') ? undefined : ((json['offers'] as Array<any>).map(OfferFromJSON)),
        'roomTypes': !exists(json, 'roomTypes') ? undefined : ((json['roomTypes'] as Array<any>).map(PropertyRoomTypesInnerFromJSON)),
        'upsellItems': !exists(json, 'upsellItems') ? undefined : ((json['upsellItems'] as Array<any>).map(PropertyUpsellItemsInnerFromJSON)),
        'bookingQuestions': !exists(json, 'bookingQuestions') ? undefined : PropertyBookingQuestionsFromJSON(json['bookingQuestions']),
        'searchCriteria': !exists(json, 'searchCriteria') ? undefined : PropertySearchCriteriaFromJSON(json['searchCriteria']),
    };
}

export function PropertyToJSON(value?: Property | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account': PropertyAccountToJSON(value.account),
        'id': value.id,
        'name': value.name,
        'propertyType': value.propertyType,
        'currency': value.currency,
        'address': value.address,
        'city': value.city,
        'state': value.state,
        'country': value.country,
        'postcode': value.postcode,
        'latitude': value.latitude,
        'longitude': value.longitude,
        'phone': value.phone,
        'mobile': value.mobile,
        'fax': value.fax,
        'email': value.email,
        'web': value.web,
        'contactFirstName': value.contactFirstName,
        'contactLastName': value.contactLastName,
        'checkInStart': value.checkInStart,
        'checkInEnd': value.checkInEnd,
        'checkOutEnd': value.checkOutEnd,
        'offerType': value.offerType,
        'sellPriority': value.sellPriority,
        'controlPriority': value.controlPriority,
        'bookingPageMultiplier': value.bookingPageMultiplier,
        'permit': value.permit,
        'roomChargeDisplay': value.roomChargeDisplay,
        'templates': PropertyTemplatesToJSON(value.templates),
        'bookingRules': PropertyBookingRulesToJSON(value.bookingRules),
        'paymentCollection': PropertyPaymentCollectionToJSON(value.paymentCollection),
        'paymentGateways': PropertyPaymentGatewaysToJSON(value.paymentGateways),
        'cardSettings': PropertyCardSettingsToJSON(value.cardSettings),
        'groupKeywords': value.groupKeywords,
        'oneTimeVouchers': value.oneTimeVouchers === undefined ? undefined : ((value.oneTimeVouchers as Array<any>).map(PropertyOneTimeVouchersInnerToJSON)),
        'discountVouchers': value.discountVouchers === undefined ? undefined : ((value.discountVouchers as Array<any>).map(PropertyDiscountVouchersInnerToJSON)),
        'featureCodes': value.featureCodes,
        'texts': value.texts === undefined ? undefined : ((value.texts as Array<any>).map(PropertyTextsInnerToJSON)),
        'offers': value.offers === undefined ? undefined : ((value.offers as Array<any>).map(OfferToJSON)),
        'roomTypes': value.roomTypes === undefined ? undefined : ((value.roomTypes as Array<any>).map(PropertyRoomTypesInnerToJSON)),
        'upsellItems': value.upsellItems === undefined ? undefined : ((value.upsellItems as Array<any>).map(PropertyUpsellItemsInnerToJSON)),
        'bookingQuestions': PropertyBookingQuestionsToJSON(value.bookingQuestions),
        'searchCriteria': PropertySearchCriteriaToJSON(value.searchCriteria),
    };
}

