export const ADD_FEED = 'ADD_FEED';
export const REMOVE_FEED = 'REMOVE_FEED';

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
