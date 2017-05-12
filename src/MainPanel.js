import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FeedsActions from './actions/FeedsActions';

import './MainPanel.css';

class MainPanel extends Component {
  formatDate(date) {
    return new Date(date).toLocaleString('ru', { day: 'numeric', month: 'short' });
  }

  render() {
    return (
      <div className='MainPanel'>
        <ul className='MainPanel__list'>
          {this.props.feedItems.map( (item, index ) => (
            <li className='MainPanel__item' key={index}>
              <span className='MainPanel__title'>
                {item.title}
              </span>
              <span className='MainPanel__date'>
                {this.formatDate(item.pubDate)}
              </span>
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
