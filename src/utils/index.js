import { parsePhoneNumber } from 'libphonenumber-js';

export const phoneNumberToBRFormat = (number: any): string => {
  if (typeof number === 'number') {
    number = number.toString();
  }

  return parsePhoneNumber(number, 'BR').formatNational();
};
