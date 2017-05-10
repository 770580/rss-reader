import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ItemsListActions from './actions/ItemsListActions';

import './MainPanel.css';

class MainPanel extends Component {

  componentDidMount() {
    console.log('1')
    this.props.feeds.forEach( feed => {
      fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed.url}`)
      .then(response => response.json())
      .then(data => this.props.makeItemsList(data.items))
      .catch(ex => console.log('connection error', ex))
    })
  }

  render() {
    console.log(this.props.feeds)
    return (
      <div className='MainPanel'>
        <ul>
          {this.props.feedItems.map( (item, index ) => (
            <li key={index}>
              {item.title}<br />
              {item.pubDate}<br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    feeds: state.feeds.feeds,
    feedItems: state.itemsList.itemsList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...ItemsListActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);
