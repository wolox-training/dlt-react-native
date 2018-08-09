import { isArray } from './utils';

export function min(first, ...args) {
  if(first && isArray(first)){
    const spreaded = [...first, ...args];
    return Math.min(...spreaded);
  }
  return first ? Math.min(...[first, ...args]) : first;
}

export function copy(toCopy) {
  if(!isArray(toCopy)) return Object.assign({}, toCopy);
  return [...toCopy];
}

export const reverseMerge = (firstArr, secArr) => [...secArr, ...firstArr];

export function filterAttribs(toFilter) {
  return Object.keys(toFilter)
    .filter(key => key !== 'a' && key !== 'b')
    .reduce((obj, key) => {
      obj[key] = toFilter[key]
      return obj;
    }, {});
}
