import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';
import BodyWrapper from '../components/BodyWrapper';
import OrderForm from '../components/OrderForm';
import fetch from 'isomorphic-fetch';
import OrdersList from '../components/OrdersList';

import { submitOrder, getOrders } from '../actions/orderActions';

class CashierContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };

    this.handleOrderSubmit = this.handleOrderSubmit.bind(this);
  }
  componentDidMount() {
    const { orders } = this.state;

    getOrders((data) => {
      this.setState({ orders: [...orders, ...data] })
    });
  }
  handleOrderSubmit(props, cb) {
    const { orders } = this.state;

    submitOrder(props, (data) => {
      if (!data.errors) {
        this.setState({ orders: [...orders, data] })
      }
      cb(data);
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
    return (<OrdersList
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
