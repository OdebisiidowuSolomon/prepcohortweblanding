export const TruncateText = (text: string, length: number = 20) => {
  return text.length <= length ? text : text.substring(0, length) + " .";
};
