import React from 'react';
import { mount } from 'enzyme';
import Header from '../components/Header';
import transactions from './fixtures/transactions.json';
import balance from './fixtures/balance.json';
import provider from './fixtures/provider.json';

import { calculateTotalExpenditure } from '../selectors/calculate-amount';
import '../setupTests';

let wrapper;
let datatransactions;
let dataBalance;
describe('<Header />', () => {
  beforeEach(() => {
    datatransactions = JSON.parse(JSON.stringify(transactions.transactions));
    dataBalance = JSON.parse(JSON.stringify(balance.balance));
    wrapper = mount(
      <Header balance={dataBalance} transactions={datatransactions} provider={provider} />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the header with right props', async () => {
    expect(wrapper.length).toEqual(1);
  });

  it('correctly display the total amount', async () => {
    expect(
      wrapper
        .find('.monthly-balance__amount')
        .text()
        .trim()
    ).toEqual('GBP 1250.32');
  });

  it('displays default message if not balance available', async () => {
    const balance = {
      amount: '',
      currency_iso: 'GBP'
    };
    wrapper = mount(
      <Header balance={balance} transactions={datatransactions} provider={provider} />
    );

    expect(
      wrapper
        .find('.monthly-balance__not-available')
        .text()
        .trim()
    ).toEqual('Balance not available');
  });

  it('correctly calculate the total amount spent', async () => {
    const total = calculateTotalExpenditure(datatransactions);

    expect(
      wrapper
        .find('.monthly-balance__expenditure')
        .text()
        .trim()
    ).toEqual(`Spent this month GBP ${total}`);
  });

  it('shows default message if value is not available', async () => {
    const transactions = [
      {
        date: '2018-06-30',
        description: 'Tesco',
        category_title: 'Groceries',
        amount: {
          value: '',
          currency_iso: 'GBP'
        }
      },
      {
        date: '2018-06-22',
        description: 'Asda',
        category_title: 'Groceries',
        amount: {
          value: '',
          currency_iso: 'GBP'
        }
      }
    ];

    wrapper = mount(
      <Header balance={dataBalance} transactions={transactions} provider={provider} />
    );

    expect(
      wrapper
        .find('.monthly-balance__expenditure-not-available')
        .text()
        .trim()
    ).toEqual('Total expenditure not available');
  });
});
