export const capitalizeFirstLetter = (string: string): string => {
  const splitted = string.split(" ");

  let finalString = "";

  for (const string of splitted) {
    finalString +=
      string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() + " ";
  }

  return finalString.trim();
};
