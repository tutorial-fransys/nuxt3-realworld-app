/* tslint:disable */
/* eslint-disable */
/**
 * RealWorld Conduit API
 * Conduit API documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NewComment
 */
export interface NewComment {
    /**
     * 
     * @type {string}
     * @memberof NewComment
     */
    body: string;
}

/**
 * Check if a given object implements the NewComment interface.
 */
export function instanceOfNewComment(value: object): boolean {
    if (!('body' in value)) return false;
    return true;
}

export function NewCommentFromJSON(json: any): NewComment {
    return NewCommentFromJSONTyped(json, false);
}

export function NewCommentFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewComment {
    if (json == null) {
        return json;
    }
    return {
        
        'body': json['body'],
    };
}

export function NewCommentToJSON(value?: NewComment | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'body': value['body'],
    };
}

