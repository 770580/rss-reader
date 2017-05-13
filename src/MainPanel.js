import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FeedsActions from './actions/FeedsActions';

import './MainPanel.css';

class MainPanel extends Component {
  constructor() {
    super();
    this.state = {
      visibleContent: -1
    }
  }

  makeContentVisible(index) {
    const visibleContent = this.state.visibleContent === index
    ? -1 
    : index
    this.setState({
      visibleContent: visibleContent
    })
  }

  formatDate(date) {
    return new Date(date.replace(/-/g, "/")).toLocaleString('ru', { day: 'numeric', month: 'short' });
  }

  render() {
    return (
      <div className='MainPanel'>
        <ul className='MainPanel__list'>
          {this.props.feedItems.map( (item, index ) => (
            <li
              className='MainPanel__item'
              key={index}
            >
              <a
                href={item.link}
                className='MainPanel__title'
              >
                {item.title}
              </a>
              <span
                className={ this.state.visibleContent === index
                  ? 'MainPanel__expand MainPanel__expand--down'
                  : 'MainPanel__expand MainPanel__expand--up'}
                onClick={this.makeContentVisible.bind(this, index)}
              />
              <span className='MainPanel__date'>
                {this.formatDate(item.pubDate)}
              </span>
              <div
                className={ this.state.visibleContent === index
                  ? 'MainPanel__content'
                  : 'MainPanel__content MainPanel__content--hidden'}
                dangerouslySetInnerHTML={{__html: item.content}}
              />
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
