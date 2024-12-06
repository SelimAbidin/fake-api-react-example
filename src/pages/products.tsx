import { useEffect, useState } from "react";
import { FakeStoreApi } from "../apis/fake-store";
import { Product, ProductsResponse } from "../apis/fake-store/types";
import { ProductCard } from "../components/product-card";
import { Link } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState<ProductsResponse>([]);

  useEffect(() => {
    if (!products.length) {
      FakeStoreApi.getProducts().then((p: ProductsResponse) => {
        setProducts(p);
      });
    }
  }, [products.length]);

  return (
    <div>
      <h3>
        <Link to="/lists">Lists</Link>
      </h3>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((p: Product) => (
          <ProductCard key={p.id} title={p.title} description={p.description} />
        ))}
      </ul>
    </div>
  );
};
