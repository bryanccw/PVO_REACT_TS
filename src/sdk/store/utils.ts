import { DynamicObjectInterface } from '../type';

export const generateSearchEventParam = (searchParamObj?: DynamicObjectInterface): string => {
  let searchParam: string = '';
  const data: DynamicObjectInterface = { ...searchParamObj };
  Object.keys(data).forEach(searchInput => {
    if (data[searchInput]) {
      searchParam += `&${searchInput}=${data[searchInput]}`;
    }
  });
  return searchParam;
};
