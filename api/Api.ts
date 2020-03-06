import BaseApi from '@/api/BaseApi'
import FetchApi from '@/api/FetchApi'
import AxiosApi from '@/api/AxiosApi'

export class Api extends BaseApi {
    private provider: any = new AxiosApi()
    async fetch(url: string): Promise<any> {
        return await this.provider.fetch(url)
    }
}