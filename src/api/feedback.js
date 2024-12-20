import ip from '../env';

export const giveFeedback = async feed => {
  try {
    let response = fetch(ip + `Feedback/submitFeedback`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feed),
    });

    let json = (await response).json();

    return json;
  } catch (error) {
    console.log('Place Order Exception', error);
  }
};
