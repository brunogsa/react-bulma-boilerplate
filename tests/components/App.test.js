import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../app/components/App';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have a <p> tag', () => {
    const hasP = wrapper.find('p').length;
    expect(hasP).toBeTruthy();
  });
});
