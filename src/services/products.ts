export const fetchProducts = async (signal?: AbortSignal) => {
  const response = await fetch("https://dummyjson.com/products?limit=10", {
    signal,
  });
  const jsonResp = await response.json();
  return jsonResp.products;
};
