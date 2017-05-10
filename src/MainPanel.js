import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FeedsActions from './actions/FeedsActions';

import './MainPanel.css';

class MainPanel extends Component {

  componentDidMount() {
    this.props.feeds.forEach( feed => {
      this.props.getItems(feed.url)
    })
  }

  render() {
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
    feedItems: state.feeds.itemsList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...FeedsActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPanel);
