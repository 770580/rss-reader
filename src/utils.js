export function fetchFeed(url) {
  fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`)
  .then(response => response.json())
  .then(data => {return data})
  .catch(ex => console.log('connection error', ex))
}
