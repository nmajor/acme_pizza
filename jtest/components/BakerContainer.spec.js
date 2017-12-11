require('babel-register')();

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import BakerContainer from '../../app/javascript/bundles/App/containers/BakerContainer';
import OrdersList from '../../app/javascript/bundles/App/components/OrdersList';

describe('<BakerContainer/>', function () {
  it('should display the orders list', function () {
    const wrapper = shallow(<BakerContainer />, { disableLifecycleMethods: true });
    expect(wrapper.find(OrdersList)).to.have.length(1);
  });
});
