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

export const addProducts = async formData => {
  try {
    let response = await fetch(ip + 'products/addProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log('Add Product', error);
  }
};
