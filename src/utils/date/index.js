import moment from 'moment';

export const getChatTime = date => {
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
};

export const setDateChat = oldDate => {
  const year = oldDate.getFullYear();
  const month = oldDate.getMonth() + 1;
  const date = oldDate.getDate();

  return `${year}-${month}-${date}`;
};

export const checkDuration = startDate => {
  const now = moment(new Date());
  const endedDate = moment(startDate);
  const diffTime = endedDate.diff(now, 'seconds');
  return diffTime;
};
