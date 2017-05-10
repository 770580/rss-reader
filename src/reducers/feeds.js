import { 
  GET_FEEDS,
  REMOVE_FEED,
  MAKE_ITEMS_LIST
} from '../actions/FeedsActions';

const initialState = {
  feeds: [],
  itemsList: []
}

export default function feeds(state = initialState, action) {
  switch (action.type) {
    case GET_FEEDS:
      return { ...state, feeds: action.payload }
    case REMOVE_FEED:
      const newFeeds = state.feeds.filter( feed => {
        return feed.id !== action.payload;
      })
      return { ...state, feeds: newFeeds}
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
