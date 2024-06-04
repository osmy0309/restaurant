export const filterByName = (searchText: string, list: any) => {
  const filteredData = list?.filter((entry: any) =>
    entry?.name?.toLocaleLowerCase().includes(searchText)
  );

  return filteredData;
};
