export const MAKE_ITEMS_LIST = 'MAKE_ITEMS_LIST';

export function makeItemsList(items) {
  return {
    type: MAKE_ITEMS_LIST,
    payload: items
  }
}
