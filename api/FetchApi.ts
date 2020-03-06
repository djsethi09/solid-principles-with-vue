import { IPhoto } from "~/types/Photo"
import IApi from "~/types/IApi"

export default class FetchApi implements IApi {
    baseUrl = 'https://jsonplaceholder.typicode.com/'
    constructor() {

    }
    async fetch(url: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}${url}`)
        return await response.json()
    }
}