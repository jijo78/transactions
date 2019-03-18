import React from 'react';
import moment from 'moment';
import { DAY_MONTH_FORMAT } from '../const/date-formats';
import PropTypes from 'prop-types';

const Transactions = ({ transactions }) => {
  return (
    <section className='monthly-balance__transactions'>
      <h2>Transactions History</h2>

      <ul>
        {transactions.map(transaction => {
          return (
            <li key={transaction.id}>
              <div>
                <p className='monthly-balance__transactions-description'>
                  {transaction.description}
                </p>
                <time className='small'>
                  <span className='monthly-balance__transactions-date'>
                    {moment(transaction.date).format(DAY_MONTH_FORMAT)}
                  </span>
                </time>
              </div>
              <div>
                <p>
                  <span className='monthly-balance__transactions-currency'>
                    {transaction.amount.currency_iso}
                  </span>{' '}
                  <span className='monthly-balance__transactions-value'>
                    {transaction.amount.value}
                  </span>
                </p>
                <p className='monthly-balance__transactions-category small'>
                  {transaction.category_title}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.array
};

export default Transactions;
