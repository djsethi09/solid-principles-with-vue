export default interface IApi {
    fetch(url: string): Promise<any>
}