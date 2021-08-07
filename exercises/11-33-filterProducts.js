function filterProducts(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];
  return productList.filter((item) => item.price > 100000);
}
