import { IPhoto } from "~/types/Photo"

export default class FetchApi {
    baseUrl = 'https://jsonplaceholder.typicode.com/'
    constructor() {

    }
    async fetch(url: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}${url}`)
        return await response.json()
    }
}