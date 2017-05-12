export const ADD_FEED = 'ADD_FEED';
export const REMOVE_FEED = 'REMOVE_FEED';
export const SORT_ITEMS_BY_DATE = 'SORT_ITEMS_BY_DATE';
export const SORT_ITEMS_BY_TITLE = 'SORT_ITEMS_BY_TITLE';

export function addFeed(feed) {
  return {
    type: ADD_FEED,
    payload: feed
  }
}

export function fetchAddFeed(url) {
  return dispatch => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`)
    .then(response => response.json())
    .then(data => {
      if (data.status !== 'error') {
        dispatch(addFeed(data))
      } else {
        alert(data.message);
      }
    })
    .catch(ex => console.log('connection error', ex))
  }
}

export function removeFeed(title) {
  return {
    type: REMOVE_FEED,
    payload: title
  }
}

export function sortItemsByDate() {
  return {
    type: SORT_ITEMS_BY_DATE
  }
}

export function sortItemsByTitle() {
  return {
    type: SORT_ITEMS_BY_TITLE
  }
}