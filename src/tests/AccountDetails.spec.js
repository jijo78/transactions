import React from 'react';
import { mount } from 'enzyme';
import AccountDetails from '../components/AccountDetails';
import provider from './fixtures/provider.json';
import '../setupTests';

let wrapper;
let data;
describe('<AccountDetails />', () => {
  beforeEach(() => {
    data = JSON.parse(JSON.stringify(provider.provider));
    wrapper = mount(<AccountDetails provider={data} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the AccountDetails with right props', async () => {
    expect(wrapper.length).toEqual(1);
  });

  it('renders the Provider name', async () => {
    expect(wrapper.find('.monthly-balance__details-account-number').text()).toEqual('12345678');
  });

  it('renders the Provider name', async () => {
    expect(wrapper.find('.monthly-balance__details-sort-code').text()).toEqual('12-34-56');
  });
});
