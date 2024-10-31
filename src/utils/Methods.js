import {showMessage} from 'react-native-flash-message';

export const successMessage = (message = '', description = '') => {
  showMessage({
    message: message,
    description: description,
    type: 'success',
    duration: 2000,
  });
};

export const errorMessage = (message = '', description = '') => {
  showMessage({
    message: message,
    description: description,
    type: 'danger',
    duration: 2000,
  });
};

export const infoMessage = (message = '', description = '') => {
  showMessage({
    message: message,
    description: description,
    type: 'info',
    duration: 2000,
  });
};
