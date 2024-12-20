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
export const getFarmerProductList = async id => {
  try {
    let response = await fetch(ip + `products/getFarmerProducts?id=${id}`);
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

export const editProducts = async (id, formData) => {
  try {
    console.log('Product Id', id);

    let response = await fetch(ip + `products/editProduct?id=${id}`, {
      method: 'PUT',
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

export const deleteProduct = async id => {
  try {
    let response = await fetch(
      ip + `products/deleteProductWithImage?id=${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log('Delete Product', error);
  }
};

export const getProductWithFeedback = async id => {
  try {
    let response = await fetch(ip + `products/getProductWithFeedback?id=${id}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
