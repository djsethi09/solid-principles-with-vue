import { IPhoto } from "~/types/Photo"
import IApi from "~/types/IApi"

export default class BaseApi implements IApi {
    protected baseUrl: string = 'https://jsonplaceholder.typicode.com/'
    async fetch(url: string): Promise<any> { }
}