import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FeedsActions from './actions/FeedsActions';
import LeftPanel from './LeftPanel';
import MainPanel from './MainPanel';
import './App.css';

class App extends Component {

  // componentDidMount() {
  //   this.props.fetchGetFeeds();
  // }

  render() {
    return (
      <div className="App">
        <LeftPanel />
        {this.props.feeds.length > 0 &&
          <MainPanel />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    feeds: state.feeds.feeds
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...FeedsActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
