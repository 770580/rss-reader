import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FeedsActions from './actions/FeedsActions';
import './LeftPanel.css';

class LeftPanel extends Component {

  handleRemoveFeed(title) {
    this.props.removeFeed(title);
  }

  handleAddFeed(event) {
    event.preventDefault();
    this.props.fetchAddFeed(this.feedInput.value.trim());
    this.feedInput.value = '';
  }

  render() {
    return (
      <div className={this.props.leftPanelOpen
        ? 'leftPanel leftPanel--open'
        : 'leftPanel'}>
        <form
          className='leftPanel__form'
          onSubmit={this.handleAddFeed.bind(this)}
        >
          <input
            className='leftPanel__input'
            type='text'
            ref={ input => { this.feedInput = input }}
            defaultValue='http://feeds.gawker.com/lifehacker/full'
          />
          <button className='leftPanel__submit'>+</button>
        </form>
        <ul className='leftPanel__feedsList'>
          {this.props.feeds.map( (feed, index) => (
            <li key={index}>
              {feed.title}
              <span
                className='leftPanel__remove'
                onClick={this.handleRemoveFeed.bind(this, feed.title)}
              >
                &nbsp;x
              </span>
            </li>
          ))}
        </ul>
        Сортировка: <br />
        <a
          className='leftPanel__sortTitle'
          onClick={this.props.sortItemsByTitle.bind(this)}
        >
          По названию
        </a>
        <br />
        <a
          className='leftPanel__sortDate'
          onClick={this.props.sortItemsByDate.bind(this)}
        >
          По дате
        </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    feeds: state.feeds.feeds,
    sortDateOrder: state.feeds.sortDateOrder,
    sortTitleOrder: state.feeds.sortTitleOrder
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...FeedsActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
