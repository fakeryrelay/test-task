import { fetchProducts } from './../API/fetchProducts';

export const loadProducts = () => {
  return (dispatch, getState) => {
    fetchProducts().then(response => {
      dispatch(getArrayOfProducts(response))
    })
  }
}

function getArrayOfProducts(products) {
  return {
    type: 'GET_ARRAY_OF_PRODUCTS',
    products: products
  };
}