import axios, {AxiosRequestConfig, AxiosError, AxiosResponse} from "axios";
import { ItemsApiClientUrlsInterface } from "./ItemsApiClientUrls.interface"; 
import { ItemsApiClientInterface } from "./ItemsApiClient.interface";
import { ItemInterface } from "@/models/items/Item.interface";

/**
 * @Name ItemsApiClientModel
 * @description
 * Implements the ItemsApiClientInterface interface
 */
 export class ItemsApiClientModel implements ItemsApiClientInterface {
    private readonly urls!: ItemsApiClientUrlsInterface
    constructor(urls: ItemsApiClientUrlsInterface) {
    this.urls = urls
    }
    fetchItems(): Promise<ItemInterface[]> {
    return new Promise<ItemInterface[]>((resolve) => {
    const url = this.urls.fetchItems
    // axios options
    const options: AxiosRequestConfig = {
    headers: {
    }
    }
    axios
    .get(url, options)
    .then((response: AxiosResponse) => {
    resolve(response.data as ItemInterface[])
    })
    .catch((error: any) => {
    console.error('ItemsApiClient: HttpClient: Get: error', error)
    })
    })
    }
   }