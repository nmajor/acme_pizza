import PropTypes from 'prop-types';
import React from 'react';
import CashierContainer from './CashierContainer';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  renderBody() {
    const { user } = this.props;

    if (user) {
      return (<CashierContainer
        user={this.props.user}
      />);
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
