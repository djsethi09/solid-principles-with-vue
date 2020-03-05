export default class Api {
    baseUrl = 'https://jsonplaceholder.typicode.com/'
    url = ''
    constructor(url) {
        this.url = url
    }
    async fetch() {
        const response = await fetch(`${this.baseUrl}${this.url}`)
        return await response.json()
    }
}