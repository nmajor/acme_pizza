require('babel-register')();

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import OrdersList from '../../app/javascript/bundles/App/components/OrdersList';

describe('<OrdersList/>', function () {
  it('should have an image to display the gravatar', function () {
    const orders = [
      {"id":2,"customer_id":2,"pizza_id":2,"pickup_at":"2017-12-08T11:41:12.726Z","status":"ready","created_at":"2017-12-11T06:06:55.902Z","updated_at":"2017-12-11T06:06:55.902Z"}
    ]
    const wrapper = shallow(<OrdersList orders={orders} />);
    expect(wrapper.find('.order-item')).to.have.length(1);
  });
});
