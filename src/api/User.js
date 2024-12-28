import ip from '../env';

export const login = async (username, password, role) => {
  try {
    console.log(username, password, role);
    let response = await fetch(
      ip +
        `user/loginuser?username=${username}&password=${password}&role=${role}`,
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
export const forgotPassword = async (email, name) => {
  try {
    const response = await fetch(
      `${ip}user/forgotpassword?email=${email}&name=${name}`,
    );
    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
  }
};

export const SignUp = async (username, password, phone, name, address) => {
  try {
    console.log(username, password);
    let response = await fetch(ip + `user/signup`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        U_name: name,
        U_email: username,
        U_number: phone,
        U_password: password,
        U_address: address,
        U_role: 'Customer',
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
export const updateUser = async (username, password, phone, name, address) => {
  try {
    console.log(username, password);
    let response = await fetch(ip + `user/updateuser`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        U_name: name,
        U_email: username,
        U_number: phone,
        U_password: password,
        U_address: address,
        U_role: 'Customer',
      }),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
export const updatePassword = async (username, oldpassword, newpassword) => {
  try {
    console.log('Password Api', username, oldpassword, newpassword);

    let response = await fetch(
      ip +
        'user/updatePassword?email=' +
        username +
        '&oldpassword=' +
        oldpassword +
        '&newpassword=' +
        newpassword,
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log('Passoerd Api', error);
  }
};
