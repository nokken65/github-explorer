import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const formatUpdatedAtDate = (date: Date): string => {
  return `Updated ` + dayjs(date).fromNow();
};
