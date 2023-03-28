import moment from 'moment';

export const getStatus = status => {
  let newStatus = '';
  switch (status) {
    case 'All':
      newStatus = '';
      break;
    case 'finish':
      newStatus = 'Finish';
      break;
    case 'failed':
      newStatus = 'Failed';
      break;
    case 'ongoing':
      newStatus = 'Ongoing';
      break;
    case 'upcoming':
      newStatus = 'Upcoming';
      break;
    case 'waiting_to_payment':
      newStatus = 'Waiting To Payment';
      break;
    case 'Finish':
      newStatus = 'finish';
      break;
    case 'Failed':
      newStatus = 'failed';
      break;
    case 'Ongoing':
      newStatus = 'ongoing';
      break;
    case 'Upcoming':
      newStatus = 'upcoming';
      break;
    case 'Waiting To Payment':
      newStatus = 'waiting_to_payment';
      break;
  }

  return newStatus;
};

export const createMessagePayload = (
  imageUrl = null,
  chatContent,
  profileId,
) => {
  return {
    createdAt: moment(new Date(), 'YYYY-MM-DD h:mm', true).format(),
    message: chatContent,
    url: imageUrl,
    type: imageUrl != null ? 'image' : 'text',
    userId: profileId,
    tempId: `${moment(new Date())}-${profileId}`,
    isFailed: false,
    isLoading: true,
  };
};

export const thousandFormat = (num, separator) => {
  const thousand = num
    ? num
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, separator ? separator : '.')
    : '0';
  return thousand;
};
