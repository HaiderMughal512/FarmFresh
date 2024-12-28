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

export const deleteFeedback = async id => {
  try {
    let response = await fetch(ip + `Feedback/deleteFeedback?id=${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log('Delete Feedback', error);
  }
};

export const editFeedback = async (id, feed) => {
  try {
    let response = await fetch(
      ip + `Feedback/editFeedback?id=${id}&feedback=${feed}`,
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
