import ip from '../env';

export const placeOrder = async (order, orderList) => {
  try {
    console.log('Order ', order);
    console.log('Order List', orderList);

    let response = fetch(ip + `order/placeOrder`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Ord: order,
        Lst: orderList,
      }),
    });

    let json = (await response).json();

    return json;
  } catch (error) {
    console.log('Place Order Exception', error);
  }
};
export const getMyOrders = async userid => {
  try {
    console.log(userid);
    let response = await fetch(ip + `order/getMyOrder?id=${userid}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const getFarmerOrders = async userid => {
  try {
    console.log(userid);
    let response = await fetch(ip + `order/getFarmerOrder?id=${userid}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
export const getFarmerNotifiation = async userid => {
  try {
    console.log(userid);
    let response = await fetch(
      ip + `Notification/getNotification?id=${userid}`,
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const updateFarmerNotificationStatus = async id => {
  try {
    // console.log(userid);
    let response = await fetch(ip + `Notification/updateNotification?id=${id}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
export const getOrderProducts = async id => {
  try {
    console.log(id);
    let response = await fetch(ip + `order/getOrderProducts?id=${id}`);
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const updateOrderStatus = async (id, status) => {
  try {
    // console.log(id);
    let response = await fetch(
      ip + `order/updateOrderStatus?id=${id}&status=${status}`,
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

export const updateProductQuantity = async (list, id) => {
  try {
    console.log('Order List', list);

    let response = fetch(ip + `Products/updateProductQuantity`, {
      method: 'PUT',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(list),
    });

    let json = (await response).json();

    return json;
  } catch (error) {
    console.log('Place Order Exception', error);
  }
};
