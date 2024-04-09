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
import type { Profile } from './Profile';
import {
    ProfileFromJSON,
    ProfileFromJSONTyped,
    ProfileToJSON,
} from './Profile';

/**
 * 
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * 
     * @type {number}
     * @memberof Comment
     */
    id: number;
    /**
     * 
     * @type {Date}
     * @memberof Comment
     */
    createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Comment
     */
    updatedAt: Date;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    body: string;
    /**
     * 
     * @type {Profile}
     * @memberof Comment
     */
    author: Profile;
}

/**
 * Check if a given object implements the Comment interface.
 */
export function instanceOfComment(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('updatedAt' in value)) return false;
    if (!('body' in value)) return false;
    if (!('author' in value)) return false;
    return true;
}

export function CommentFromJSON(json: any): Comment {
    return CommentFromJSONTyped(json, false);
}

export function CommentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Comment {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'createdAt': (new Date(json['createdAt'])),
        'updatedAt': (new Date(json['updatedAt'])),
        'body': json['body'],
        'author': ProfileFromJSON(json['author']),
    };
}

export function CommentToJSON(value?: Comment | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'createdAt': ((value['createdAt']).toISOString()),
        'updatedAt': ((value['updatedAt']).toISOString()),
        'body': value['body'],
        'author': ProfileToJSON(value['author']),
    };
}
