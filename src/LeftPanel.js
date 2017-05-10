import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FeedsActions from './actions/FeedsActions';
import './LeftPanel.css';

class LeftPanel extends Component {

  handleRemoveFeed(id) {
    this.props.fetchRemoveFeed(id);
  }

  handleAddFeed(event) {
    event.preventDefault();
    alert(this.feedInput.value.trim());
    this.feedInput.value = '';
  }

  render() {
    return (
      <div className='leftPanel'>
        <ul>
          {this.props.feeds.map( feed => (
            <li key={feed.id}>
              {feed.title}
              <span
                onClick={this.handleRemoveFeed.bind(this, feed.id)}
              >
                &nbsp;X
              </span>
            </li>
          ))}
        </ul>
        <form
          onSubmit={this.handleAddFeed.bind(this)}
        >
          <input
            type='text'
            ref={ input => { this.feedInput = input }}
          />
          <button>Add</button>
        </form>
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
