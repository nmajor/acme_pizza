require('babel-register')();

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import CashierContainer from '../../app/javascript/bundles/App/containers/CashierContainer';
import OrderForm from '../../app/javascript/bundles/App/components/OrderForm';
import OrdersList from '../../app/javascript/bundles/App/components/OrdersList';

describe('<CashierContainer/>', function () {
  it('should display the Order Form', function () {
    const wrapper = shallow(<CashierContainer />, { disableLifecycleMethods: true });
    expect(wrapper.find(OrderForm)).to.have.length(1);
  });

  it('should display the Orders List', function () {
    const wrapper = shallow(<CashierContainer />, { disableLifecycleMethods: true });
    expect(wrapper.find(OrdersList)).to.have.length(1);
  });
});
