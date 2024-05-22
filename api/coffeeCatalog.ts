import axios, { AxiosInstance } from "axios";
import { CoffeProduct } from "@/app/interfaces/interfaces";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const COFFEE_API = BASE_URL + '/coffee';

const httpCode = {
    OK: 200
  };

  class CoffeeApi {
    api: AxiosInstance;
    constructor() {
      this.api = axios.create({
        baseURL: BASE_URL,
      });
    }
async fetchCoffeeProducts(): Promise<CoffeProduct[]> {
  try {
    const response = await this.api.get(COFFEE_API);
    if (response.status !== httpCode.OK) {
        throw new Error(`Ошибка при получении данных: ${response.status}`);
    }
    return response.data.data;
} catch (error) {
    console.error('Ошибка при получении данных', error);
    throw new Error('Ошибка при получении данных');
}
}
}

export const coffeeApi = new CoffeeApi();