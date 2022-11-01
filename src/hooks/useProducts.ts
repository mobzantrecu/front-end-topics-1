import { useState, useEffect } from "react";
import { fetchProducts } from "src/services/products";

// Signal is used when the user leaves the page with an ongoing request,
//if you have a setState on the catch of the req, it would throw an error for unmounted component

const useProducts = () => {
  const [products, setProducts] = useState([] as any[]);

  const getProducts = async () => {
    const { signal } = new AbortController();
    const products = await fetchProducts(signal);
    setProducts(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return products;
};

export default useProducts;
