export const formatNumber = (value: number, leadingZero = false) => {
  const formattedValue = leadingZero ? value.toString().padStart(2, '0') : value.toString();
  return formattedValue;
};
