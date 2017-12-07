import PropTypes from 'prop-types';
import React from 'react';
import CashierContainer from './CashierContainer';
import ManagerContainer from './ManagerContainer';
import BakerContainer from './BakerContainer';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  renderBody() {
    const { user } = this.props;
    console.log('blah role', user.role);

    if (user.role === 'cashier') {
      return (<CashierContainer
        {...this.props}
      />);
    } else if (user.role === 'manager') {
      return (<ManagerContainer
        {...this.props}
      />);
    } else if (user.role === 'baker') {
      return (<BakerContainer
        {...this.props}
      />);
    } else {
      return "Please login with a user with a valid role"
    }
  }
  render() {
    return (
      <div>
        {this.renderBody()}
      </div>
    );
  }
}
