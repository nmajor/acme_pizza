import PropTypes from 'prop-types';
import React from 'react';

export default class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { user } = this.props;

    return (<div className="navbar-wagon">
      <a href="/" className="navbar-wagon-brand">
        Dashboard
      </a>

      <div className="navbar-wagon-right hidden-xs hidden-sm">

        <div className="navbar-wagon-item">
          <div className="dropdown">
            <img src={user.avatarUrl} className="avatar dropdown-toggle" id="navbar-wagon-menu" data-toggle="dropdown" />
            <ul className="dropdown-menu dropdown-menu-right navbar-wagon-dropdown-menu">
              <li><a href="/sign_out">Log Out</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-wagon-item hidden-md hidden-lg">
        <div className="dropdown">
          <i className="fa fa-bars dropdown-toggle" data-toggle="dropdown"></i>
          <ul className="dropdown-menu dropdown-menu-right navbar-wagon-dropdown-menu">
          </ul>
        </div>
      </div>
    </div>);
  }
}
