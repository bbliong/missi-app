export const showError = (message = '') => {
  // eslint-disable-next-line no-undef
  toast.show(
    message == '' && message != undefined
      ? 'There is an error. Please check again'
      : message,
    {
      type: 'error_toast',
      placement: 'bottom',
      duration: 4000,
      offset: 35,
      animationType: 'slide-in',
    },
  );
};

export const showSuccess = message => {
  // eslint-disable-next-line no-undef
  toast.show(
    message == '' && message != undefined
      ? 'There is an error. Please check again'
      : message,
    {
      type: 'success_toast',
      placement: 'bottom',
      duration: 4000,
      offset: 35,
      animationType: 'slide-in',
    },
  );
};
