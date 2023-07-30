export const formatPostDate = (date: Date): string => {
  return date.toLocaleDateString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
