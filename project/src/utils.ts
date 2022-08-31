import dayjs from 'dayjs';
import { MINUTES_IN_HOUR } from './const';

export function getTransformTime (runTime: number | undefined) {
  if (typeof runTime === 'number') {
    return `${Math.floor(runTime / MINUTES_IN_HOUR)}h ${runTime % MINUTES_IN_HOUR}m`;
  }
  return 'undefined';

}

export const humanizeCommentDate = (dueDate: string) => dayjs(dueDate).format('MMMM D, YYYY');
