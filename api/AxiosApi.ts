import BaseApi from './BaseApi';
import axios from 'axios'
import { IPhoto } from '~/types/Photo';
export default class AxiosApi extends BaseApi {
    constructor() {
        super()
    }
    async fetch(url: string): Promise<any> {
        const response = await axios.get(`${this.baseUrl}${url}`)
        return response.data
    }
}