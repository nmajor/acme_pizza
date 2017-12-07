import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';

export default class CashierContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { user } = this.props;

    return (
      <div>
        <Header user={user} />
        {user.email}
      </div>
    );
  }
}
