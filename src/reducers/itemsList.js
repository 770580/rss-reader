import { MAKE_ITEMS_LIST } from '../actions/ItemsListActions';

const initialState = {
  itemsList: []
}

export default function itemList(state = initialState, action) {
  switch (action.type) {
    case MAKE_ITEMS_LIST:
      let newItemsList = state.itemsList.concat(action.payload);
      newItemsList.sort( (a, b) => {
        return new Date(a.pubDate) - new Date(b.pubDate);
      })
      return { ...state, itemsList: newItemsList }
    default:
      return state;
  }
}
