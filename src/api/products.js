import ip from '../env';

export const getProductList = async () => {
  try {
    let response = await fetch(ip + `products/getProducts`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
