import React from 'react';
import { mount } from 'enzyme';
import Transactions from '../components/Transactions';
import transactions from './fixtures/transactions.json';
import '../setupTests';

let wrapper;
let data;
describe('<AccountDetails />', () => {
  beforeEach(() => {
    data = JSON.parse(JSON.stringify(transactions.transactions));
    wrapper = mount(<Transactions transactions={data} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the Transactions with right props', async () => {
    expect(wrapper.length).toEqual(1);
  });

  it('renders the right number of', async () => {
    expect(wrapper.find('li').length).toEqual(2);
  });

  it('renders the Provider name', async () => {
    expect(
      wrapper
        .find('.monthly-balance__transactions-currency')
        .first()
        .text()
    ).toEqual('GBP');
  });

  it('renders every transaction value', async () => {
    expect(
      wrapper
        .find('.monthly-balance__transactions-value')
        .first()
        .text()
    ).toEqual('-57.21');
  });
});
