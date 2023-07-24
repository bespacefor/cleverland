import { formatNumber } from './format-number';

import { ButtonType, TextPlaceholder } from 'types/enum';

export const getButtonStyles = (isBooked: boolean, bookedTill: string) => {
  const buttonType = isBooked ? ButtonType.secondaryButton : ButtonType.primaryButton;
  const date = new Date(bookedTill);
  const day = formatNumber(date.getDate(), true);
  const month = formatNumber(date.getMonth() + 1, true);
  const dateOff = `${day}.${month}`;
  const buttonTitle = isBooked
    ? bookedTill
      ? `${TextPlaceholder.busy} ${dateOff}`
      : TextPlaceholder.booked
    : TextPlaceholder.booking;

  return {
    buttonType,
    buttonTitle
  };
};
