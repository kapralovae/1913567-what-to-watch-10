export function transformTime (runTime: number | undefined) {
  if (typeof runTime === 'number') {
    return `${Math.floor(runTime / 60)}h ${runTime % 60}m`;
  }
  return 'undefined';

}
