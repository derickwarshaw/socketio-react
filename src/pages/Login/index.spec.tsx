import React from 'react';
import { shallow } from 'enzyme';

import Login from './index';

it('Login has form tag', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('.Login__form')).toBeTruthy();
});
