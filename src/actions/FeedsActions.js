export const GET_FEEDS = 'GET_FEEDS';
export const REMOVE_FEED = 'REMOVE_FEED';

export function getFeeds(feeds) {
  return {
    type: GET_FEEDS,
    payload: feeds
  }
}

export function fetchGetFeeds() {
  return dispatch => {
    fetch( process.env.NODE_ENV !== 'production' ? 'http://localhost:3004/feeds' : 'https://demo1896123.mockable.io/clients')
    .then(response => response.json())
    .then(data => dispatch(getFeeds(data)))
    .catch(ex => console.log('connection error', ex))
  }
}

export function removeFeed(id) {
  return {
    type: REMOVE_FEED,
    payload: id
  }
}

export function fetchRemoveFeed(id) {
  return dispatch => {
    fetch( process.env.NODE_ENV !== 'production' ? `http://localhost:3004/feeds/${id}` : 'https://demo1896123.mockable.io/clients', {
      method: 'DELETE'
    })
    .then(data => dispatch(removeFeed(id)))
    .catch(ex => console.log('something went wrong', ex))
  }
}
