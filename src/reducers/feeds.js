import { 
  ADD_FEED
} from '../actions/FeedsActions';

const initialState = {
  feeds: [],
  itemsList: []
}

export default function feeds(state = initialState, action) {
  switch (action.type) {
    case ADD_FEED:
      const newFeed = {
        title: action.payload.feed.title,
        link: action.payload.feed.link
      }
      const newItems = action.payload.items.map( item => {
        return Object.assign(item, { feed_title: action.payload.feed.title})
      })
      return {
        ...state,
        feeds: state.feeds.concat(newFeed),
        itemsList: state.itemsList.concat(newItems)
      }
    default:
      return state;
  }
}
