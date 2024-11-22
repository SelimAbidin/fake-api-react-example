import { useEffect, useState } from "react";
import { FakeStoreApi } from "../apis/fake-store";
import { Product, ProductsResponse } from "../apis/fake-store/types";
import { ProductCard } from "../components/product-card";

export const Products = () => {
  const [products, setProducts] = useState<ProductsResponse>([]);

  useEffect(() => {
    FakeStoreApi.getProducts().then((p: ProductsResponse) => {
      setProducts(p);
    });
  }, []);

  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((p: Product) => (
        <ProductCard key={p.id} title={p.title} description={p.description} />
      ))}
    </ul>
  );
};
