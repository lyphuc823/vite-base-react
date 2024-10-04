export const formatDate = (date: string | Date) => {
  const format = date.toLocaleString();
  return format;
};

export const formatNumber = (number: number) => {
  // Check if the input is a valid number
  if (isNaN(number)) {
    return 'Invalid Number';
  }

  // Convert the number to a string
  const numString = number.toString();

  // Split the string into integer and decimal parts
  const [integerPart, decimalPart] = numString.split('.');

  // Add commas to the integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // If there is a decimal part, append it back to the formatted integer part
  const formattedNumber = decimalPart
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;

  return formattedNumber;
};
