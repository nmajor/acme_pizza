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
        <a href="" className="navbar-wagon-item navbar-wagon-link">Host</a>
        <a href="" className="navbar-wagon-item navbar-wagon-link">Trips</a>

        <div className="navbar-wagon-item">
          <div className="dropdown">
            <img src={user.avatar_url} className="avatar dropdown-toggle" id="navbar-wagon-menu" data-toggle="dropdown" />
            <ul className="dropdown-menu dropdown-menu-right navbar-wagon-dropdown-menu">
              <li><a href="#">Profile</a></li>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Log Out</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar-wagon-item hidden-md hidden-lg">
        <div className="dropdown">
          <i className="fa fa-bars dropdown-toggle" data-toggle="dropdown"></i>
          <ul className="dropdown-menu dropdown-menu-right navbar-wagon-dropdown-menu">
            <li><a href="#">Host</a></li>
            <li><a href="#">Trips</a></li>
            <li><a href="#">Messagese</a></li>
          </ul>
        </div>
      </div>
    </div>);
  }
}