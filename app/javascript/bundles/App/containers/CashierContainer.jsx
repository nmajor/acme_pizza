import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';
import BodyWrapper from '../components/BodyWrapper';
import OrderForm from '../components/OrderForm';
import fetch from 'isomorphic-fetch';

import { submitOrder } from '../actions/orderActions';

class CashierContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  handleOrderSubmit(props) {
    submitOrder(props, () => {
      console.log('blah response', res);
    });
  }
  renderOrderForm() {
    const {
      pizzaKindOptions,
      pizzaSizeOptions,
    } = this.props;

    return (<OrderForm
      pizzaKindOptions={pizzaKindOptions}
      pizzaSizeOptions={pizzaSizeOptions}
      onSubmit={this.handleOrderSubmit}
    />);
  }
  render() {
    const { user } = this.props;

    return (
      <div>
        <Header user={user} />
        <BodyWrapper>
          {this.renderOrderForm()}
        </BodyWrapper>
      </div>
    );
  }
}

export default CashierContainer;
