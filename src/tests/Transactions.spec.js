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

  it('renders the right number of children', async () => {
    expect(wrapper.find('li').length).toEqual(2);
  });

  it('renders the right currency', async () => {
    expect(
      wrapper
        .find('.monthly-balance__transactions-currency')
        .first()
        .text()
    ).toEqual('GBP');
  });

  it('renders the expense description', async () => {
    expect(
      wrapper
        .find('.monthly-balance__transactions-description')
        .first()
        .text()
    ).toEqual('Tesco');
  });

  it('renders the correct type of category', async () => {
    expect(
      wrapper
        .find('.monthly-balance__transactions-category')
        .first()
        .text()
    ).toEqual('Groceries');
  });

  it('renders transaction value', async () => {
    expect(
      wrapper
        .find('.monthly-balance__transactions-value')
        .first()
        .text()
    ).toEqual('-57.21');
  });

  it('correctly format the date', async () => {
    expect(
      wrapper
        .find('.monthly-balance__transactions-date')
        .first()
        .text()
    ).toEqual('30 Jun 2018');
  });
});
