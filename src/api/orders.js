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
