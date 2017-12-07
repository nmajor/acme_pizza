import PropTypes from 'prop-types';
import React from 'react';

export default class OrderList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  renderListItem() {
    return (<div><div>);
  }
  renderListItems() {
    const orders = this.state.orders.map((order) => {
      return this.renderListItem(order);
    });

    return
  }
  render() {
    return (
      <div class="panel panel-primary">
      <!-- Default panel contents -->
      <div class="panel-heading">Orders</div>

      <!-- Table -->
      <table class="table">
        ...
      </table>
    </div>
    );
  }
}
