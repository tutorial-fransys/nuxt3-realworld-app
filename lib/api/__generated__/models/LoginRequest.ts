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
import type { LoginUser } from './LoginUser';
import {
    LoginUserFromJSON,
    LoginUserFromJSONTyped,
    LoginUserToJSON,
} from './LoginUser';

/**
 * 
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * 
     * @type {LoginUser}
     * @memberof LoginRequest
     */
    user: LoginUser;
}

/**
 * Check if a given object implements the LoginRequest interface.
 */
export function instanceOfLoginRequest(value: object): boolean {
    if (!('user' in value)) return false;
    return true;
}

export function LoginRequestFromJSON(json: any): LoginRequest {
    return LoginRequestFromJSONTyped(json, false);
}

export function LoginRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'user': LoginUserFromJSON(json['user']),
    };
}

export function LoginRequestToJSON(value?: LoginRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'user': LoginUserToJSON(value['user']),
    };
}

