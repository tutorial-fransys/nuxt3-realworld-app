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


import * as runtime from '../runtime';
import type {
  CreateArticle201Response,
  GenericErrorModel,
} from '../models/index';
import {
    CreateArticle201ResponseFromJSON,
    CreateArticle201ResponseToJSON,
    GenericErrorModelFromJSON,
    GenericErrorModelToJSON,
} from '../models/index';

export interface CreateArticleFavoriteRequest {
    slug: string;
}

export interface DeleteArticleFavoriteRequest {
    slug: string;
}

/**
 * 
 */
export class FavoritesApi extends runtime.BaseAPI {

    /**
     * Favorite an article. Auth is required
     * Favorite an article
     */
    async createArticleFavoriteRaw(requestParameters: CreateArticleFavoriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateArticle201Response>> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling createArticleFavorite().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Token authentication
        }

        const response = await this.request({
            path: `/articles/{slug}/favorite`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateArticle201ResponseFromJSON(jsonValue));
    }

    /**
     * Favorite an article. Auth is required
     * Favorite an article
     */
    async createArticleFavorite(requestParameters: CreateArticleFavoriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateArticle201Response> {
        const response = await this.createArticleFavoriteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unfavorite an article. Auth is required
     * Unfavorite an article
     */
    async deleteArticleFavoriteRaw(requestParameters: DeleteArticleFavoriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateArticle201Response>> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling deleteArticleFavorite().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // Token authentication
        }

        const response = await this.request({
            path: `/articles/{slug}/favorite`.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateArticle201ResponseFromJSON(jsonValue));
    }

    /**
     * Unfavorite an article. Auth is required
     * Unfavorite an article
     */
    async deleteArticleFavorite(requestParameters: DeleteArticleFavoriteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateArticle201Response> {
        const response = await this.deleteArticleFavoriteRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
