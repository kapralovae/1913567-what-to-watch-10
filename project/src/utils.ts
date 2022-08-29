import dayjs from 'dayjs';

export function getTransformTime (runTime: number | undefined) {
  if (typeof runTime === 'number') {
    return `${Math.floor(runTime / 60)}h ${runTime % 60}m`;
  }
  return 'undefined';

}

export const humanizeCommentDate = (dueDate: string) => dayjs(dueDate).format('MMMM D, YYYY');
