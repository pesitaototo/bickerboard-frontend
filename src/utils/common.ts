
// parseDate returns date in the format of mm dd, yyyy
export const parseDate = (date: Date): string => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('defaut', { month: 'long' });
  const year = dateObj.getUTCFullYear();

  return `${month} ${day}, ${year}`
}