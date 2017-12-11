require('babel-register')();

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import OrdersList from '../../app/javascript/bundles/App/components/OrdersList';

describe('<OrdersList/>', function () {
  it('should display orders', function () {
    const orders = [
      {"id":1,"customer_id":1,"pizza_id":1,"pickup_at":"2017-12-07T11:41:12.726Z","status":"cooking","created_at":"2017-12-11T06:42:36.415Z","updated_at":"2017-12-11T06:42:36.415Z"},
      {"id":2,"customer_id":2,"pizza_id":2,"pickup_at":"2017-12-08T11:41:12.726Z","status":"ready","created_at":"2017-12-11T06:42:36.424Z","updated_at":"2017-12-11T06:42:36.424Z"}
    ];

    const wrapper = shallow(<OrdersList orders={orders} />);
    expect(wrapper.find('.order-item')).to.have.length(2);
  });
});
