import { 
  ADD_FEED,
  REMOVE_FEED
} from '../actions/FeedsActions';

const initialState = {
  feeds: [],
  itemsList: []
}

export default function feeds(state = initialState, action) {
  switch (action.type) {
    case ADD_FEED: {
      const newFeed = {
        title: action.payload.feed.title,
        link: action.payload.feed.link
      }
      const newItems = action.payload.items.map( item => (
        Object.assign(
          item,
          { feed_title: action.payload.feed.title }
        )
      ))
      return {
        ...state,
        feeds: state.feeds.concat(newFeed),
        itemsList: state.itemsList.concat(newItems)
      }
    }
    case REMOVE_FEED: {
      const newFeeds = state.feeds.filter( feed => (
        feed.title !== action.payload
      ))
      const newItems = state.itemsList.filter( item => (
        item.feed_title !== action.payload
      ))
      return {
        ...state,
        feeds: newFeeds,
        itemsList: newItems
      }
    }
    default:
      return state;
  }
}
