export const fetchProducts = async () => {
  const response = await fetch('https://files.rerotor.ru/rerotor/products.json')
  const products = await response.json()
  return products
}