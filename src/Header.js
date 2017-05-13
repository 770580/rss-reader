import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <div className='Header'>
        <div
          className='Header__menu'
          onClick={this.props.toggleLeftPanelOpen}
        >
          <div className='Header__menuLine' />
        </div>
        <div className='Header__logo'>
          RSS Reader
        </div>
      </div>
    );
  }
}

export default Header;
