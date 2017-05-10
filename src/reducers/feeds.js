import { GET_FEEDS, REMOVE_FEED } from '../actions/FeedsActions';

const initialState = {
  feeds: []
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
    default:
      return state;
  }
}
