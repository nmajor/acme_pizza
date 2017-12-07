import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import moment from 'moment';

export default class OrderList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  renderListItem(order) {
    return (<tr key={order.id}>
      <td>{order.id}</td>
      <td>{_.get(order, 'customer.name')}</td>
      <td>{_.get(order, 'customer.phone')}</td>
      <td>{_.get(order, 'pizza.kind')}</td>
      <td>{_.get(order, 'pizza.size')}</td>
      <td>{_.get(order, 'status')}</td>
      <td>20 min</td>
    </tr>);
  }
  renderListItems() {
    return this.props.orders.map((order) => {
      return this.renderListItem(order);
    });
  }
  render() {
    return (<div className="panel panel-primary">
      <div className="panel-heading">Orders</div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Pizza</th>
            <th>Size</th>
            <th>Status</th>
            <th>Pickup</th>
          </tr>
        </thead>
        <tbody>
          {this.renderListItems()}
        </tbody>
      </table>
    </div>);
  }
}
