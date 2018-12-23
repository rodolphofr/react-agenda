import { parsePhoneNumber } from 'libphonenumber-js';

export const phoneNumberToBRFormat = number => {

  if (typeof (number) === 'number')
    number = number.toString();

  return parsePhoneNumber(number, 'BR').formatNational();

};
