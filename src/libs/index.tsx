export const TruncateText = (text: string, length: number = 20) => {
  return text.length <= length ? text : text.substring(0, length) + " ...";
};

export function formatCurrency(amount: number, currencyCode = "NGN") {
  return `₦${new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  })
    .format(amount)
    .split("NGN")[1]
    .trim()}`;
}

export function splitNumberToArray(number: number): number[] {
  const integerPart = Math.min(Math.floor(number), 5);
  const decimalPart = number - integerPart;
  const diffPart = 5 - Math.ceil(number);

  return [
    ...Array(integerPart).fill(1),
    ...(decimalPart ? [decimalPart] : []),
    ...Array(diffPart).fill(0),
  ];
}
