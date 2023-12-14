export const getAbbrevation = (name: string): string[] => {
  const words = name.trim().split(" ");
  if (words.length < 1) return [words[0].charAt(0).toLowerCase()];
  return words.slice(0, 2).map((word) => word.charAt(0).toLowerCase());
};
