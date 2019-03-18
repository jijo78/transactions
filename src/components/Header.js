import React from 'react';
import PropTypes from 'prop-types';
import { calculateTotalExpenditure } from '../selectors/calculate-amount';
import logo from './Monzo_logo.svg_.png';
import AccountDetails from './AccountDetails';

const Header = ({ balance, transactions, provider }) => {
  const totalExpenditure = calculateTotalExpenditure(transactions);
  console.log(balance.currency_iso.replace('£', '£'));
  return (
    <header className='monthly-balance__header'>
      <section>
        <h1>
          {' '}
          <span className='monthly-balance__amount'>
            {balance.amount !== '' ? (
              `${balance.currency_iso ? balance.currency_iso.replace('GBP', '£') : '£'} ${
                balance.amount
              }`
            ) : (
              <span className='monthly-balance__not-available'>Balance not available</span>
            )}
          </span>
        </h1>
        <p>Available Balance</p>
      </section>
      <picture className='monthly-balance__header-logo'>
        <img src={logo} alt='' className='monthly-balance__header-logo-img' />
      </picture>
      <section>
        <h4>
          <span className='monthly-balance__expenditure'>
            {totalExpenditure !== 0 ? (
              `Spent this month ${
                balance.currency_iso ? balance.currency_iso.replace('GBP', '£') : '£'
              } ${totalExpenditure}`
            ) : (
              <span className='monthly-balance__expenditure-not-available'>
                Total expenditure not available
              </span>
            )}
          </span>
        </h4>
      </section>
      <AccountDetails provider={provider} />
    </header>
  );
};

Header.propTypes = {
  transactions: PropTypes.array,
  balance: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default Header;
