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
      <div className='leftPanel'>
        <form
          onSubmit={this.handleAddFeed.bind(this)}
        >
          <input
            type='text'
            ref={ input => { this.feedInput = input }}
            defaultValue='http://feeds.gawker.com/lifehacker/full'
          />
          <button>Add</button>
        </form>
        <ul>
          {this.props.feeds.map( (feed, index) => (
            <li key={index}>
              {feed.title}
              <span
                onClick={this.handleRemoveFeed.bind(this, feed.title)}
              >
                &nbsp;X
              </span>
            </li>
          ))}
        </ul>
        Сортировка: <br />
        <a onClick={this.props.sortItemsByTitle.bind(this)}>По названию</a> <br />
        <a onClick={this.props.sortItemsByDate.bind(this)}>По дате</a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    feeds: state.feeds.feeds,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...FeedsActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
