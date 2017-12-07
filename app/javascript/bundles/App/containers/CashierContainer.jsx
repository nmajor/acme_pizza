import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';
import BodyWrapper from '../components/BodyWrapper';
import OrderForm from '../components/OrderForm';
import fetch from 'isomorphic-fetch';

import { submitOrder, getOrders } from '../actions/orderActions';

class CashierContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [];
    };
  }
  componentDidMount() {
    getOrders((res) => {
      this.setState({ orders: [...this.state.orders, ...res.orders] })
    });
  }
  handleOrderSubmit(props) {
    submitOrder(props, () => {
      if (!res.errors)
      this.setState({ orders: [...this.state.orders, res] })
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
  renderOrderList() {
    return (<OrderList
      orders={this.state.orders}
    />);
  }
  render() {
    const { user } = this.props;

    return (
      <div>
        <Header user={user} />
        <BodyWrapper>
          {this.renderOrderForm()}
          {this.renderOrderList()}
        </BodyWrapper>
      </div>
    );
  }
}

export default CashierContainer;
