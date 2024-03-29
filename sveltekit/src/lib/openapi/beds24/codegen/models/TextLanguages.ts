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
 * @interface TextLanguages
 */
export interface TextLanguages {
    /**
     * 
     * @type {string}
     * @memberof TextLanguages
     */
    language?: TextLanguagesLanguageEnum;
}


/**
 * @export
 */
export const TextLanguagesLanguageEnum = {
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
export type TextLanguagesLanguageEnum = typeof TextLanguagesLanguageEnum[keyof typeof TextLanguagesLanguageEnum];


/**
 * Check if a given object implements the TextLanguages interface.
 */
export function instanceOfTextLanguages(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TextLanguagesFromJSON(json: any): TextLanguages {
    return TextLanguagesFromJSONTyped(json, false);
}

export function TextLanguagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextLanguages {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'language': !exists(json, 'language') ? undefined : json['language'],
    };
}

export function TextLanguagesToJSON(value?: TextLanguages | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'language': value.language,
    };
}

