import { ProductsResponse } from "./types";

const httpClientCreator = (baseUrl: string) => (path: string) => {
  return fetch(baseUrl + path, {
    headers: { "Content-Type": "application/json" },
  });
};

const httpClient = httpClientCreator("https://fakestoreapi.com/");

export const FakeStoreApi = {
  getProducts: (): Promise<ProductsResponse> =>
    httpClient("products").then((res) => res.json()),
};
