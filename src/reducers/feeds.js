import { 
  ADD_FEED,
  REMOVE_FEED,
  SORT_ITEMS_BY_DATE,
  SORT_ITEMS_BY_TITLE
} from '../actions/FeedsActions';

const initialState = {
  feeds: [],
  itemsList: [],
  sortDateOrder: 'DESC',
  sortTitleOrder: 'DESC'
}

export default function feeds(state = initialState, action) {
  switch (action.type) {
    case ADD_FEED: {
      const newFeed = {
        title: action.payload.feed.title,
        link: action.payload.feed.link
      }
      let newItems = action.payload.items.map( item => (
        Object.assign(
          item,
          { feed_title: action.payload.feed.title }
        )
      ))
      newItems = state.itemsList.concat(newItems).sort( (a, b) => {
        return new Date(b.pubDate) - new Date(a.pubDate);
      })
      return {
        ...state,
        feeds: state.feeds.concat(newFeed),
        itemsList: newItems,
        sortDateOrder: 'DESC',
        sortTitleOrder: 'DESC'
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
    case SORT_ITEMS_BY_DATE: {
      return state.sortDateOrder === 'ASC'
        ? {
            ...state,
            itemsList: [...state.itemsList.sort( (a, b) => (
              new Date(b.pubDate) - new Date(a.pubDate)
            ))],
            sortDateOrder: 'DESC',
            sortTitleOrder: 'DESC'
          }
        : {
            ...state,
            itemsList: [...state.itemsList.sort( (a, b) => (
              new Date(a.pubDate) - new Date(b.pubDate)
            ))],
            sortDateOrder: 'ASC',
            sortTitleOrder: 'DESC'
          }
    }
    case SORT_ITEMS_BY_TITLE: {
      return state.sortTitleOrder === 'ASC'
        ? {
            ...state,
            itemsList: [...state.itemsList.sort( (a, b) => (
              b.title.localeCompare(a.title)
            ))],
            sortDateOrder: 'ASC',
            sortTitleOrder: 'DESC'
          }
        : {
            ...state,
            itemsList: [...state.itemsList.sort( (a, b) => (
              a.title.localeCompare(b.title)
            ))],
            sortDateOrder: 'ASC',
            sortTitleOrder: 'ASC'
          }
    }
    default:
      return state;
  }
}
