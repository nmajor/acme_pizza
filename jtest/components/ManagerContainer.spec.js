require('babel-register')();

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import ManagerContainer from '../../app/javascript/bundles/App/containers/ManagerContainer';
import OrdersList from '../../app/javascript/bundles/App/components/OrdersList';

describe('<ManagerContainer/>', function () {
  it('should display the orders list', function () {
    const wrapper = shallow(<ManagerContainer />, { disableLifecycleMethods: true });
    expect(wrapper.find(OrdersList)).to.have.length(1);
  });
});
