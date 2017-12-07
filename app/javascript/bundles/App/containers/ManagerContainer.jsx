import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';
import BodyWrapper from '../components/BodyWrapper';
import OrderForm from '../components/OrderForm';
import fetch from 'isomorphic-fetch';
import OrdersList from '../components/OrdersList';

import { submitOrder, getOrders } from '../actions/orderActions';

class ManagerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }
  componentDidMount() {
    const { orders } = this.state;

    getOrders((data) => {
      this.setState({ orders: [...orders, ...data] })
    });
  }
  sordedOrders() {
    const { orders } = this.state;

    _.sortBy(() => {

    });
  }
  render() {
    const { user } = this.props;

    return (
      <div>
        <Header user={user} />
        <BodyWrapper>
          <OrdersList
            orders={this.state.orders}
          />
        </BodyWrapper>
      </div>
    );
  }
}

export default ManagerContainer;
