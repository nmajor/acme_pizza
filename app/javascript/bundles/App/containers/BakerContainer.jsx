import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';
import BodyWrapper from '../components/BodyWrapper';
import OrderForm from '../components/OrderForm';
import fetch from 'isomorphic-fetch';
import OrdersList from '../components/OrdersList';

import { submitOrder, getOrders } from '../actions/orderActions';

class BakerContainer extends React.Component {
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

    return _.sortBy(orders, (order) => {
      return order.pickup_at;
    });
  }
  render() {
    const { user } = this.props;

    return (
      <div>
        <Header user={user} />
        <BodyWrapper>
          <OrdersList
            orders={this.sordedOrders()}
          />
        </BodyWrapper>
      </div>
    );
  }
}

export default BakerContainer;
