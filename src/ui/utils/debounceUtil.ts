import type { DynamicObjectInterface } from '../../sdk/type';

export function debounce(fn: Function, debounceItem: DynamicObjectInterface = { tId: null }, ms = 500) {
  return function (this: unknown, ...args: string[]) {
    debounceItem.tId && clearTimeout(debounceItem.tId);
    debounceItem.tId = setTimeout(() => fn.apply(this, args), ms);
  };
}
