const API_URL = process.env.API_URL || 'http://localhost:3000';

//Featured

//Movies

export interface ApiQueryParams {
    [key: string]: string | number | boolean;
}

export interface RequestOptions {
    page?: number;
    _limit?: number;
    rating_like?: number;
}

export const defaultOptions: RequestOptions = {
    page: 1,
    _limit: 10,
    rating_like: 0,
 }

export function buildQueryString(params: ApiQueryParams) {
    const query = Object.entries(params).filter(
        ([, value]) => value !== undefined
             && value !== null)
             .map(([key, value]) => [key, encodeURIComponent(String(value))]);

    return `?${new URLSearchParams(Object.fromEntries(query)).toString()}`;
}

export async function apiRequest(
    endpoint: string,
    query: ApiQueryParams = {},
    options: RequestOptions = {}
) {

    const mergedOptions: RequestOptions = { ...defaultOptions, ...options };
    const queryString: string = buildQueryString({...query, ...mergedOptions});
    try {
        const url = `${API_URL}/${endpoint}${queryString}`;
        console.log(url)
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }        
        return response.json();
  } catch (error) {
    throw error;
  }
}