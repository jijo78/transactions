import React from 'react';
import PropTypes from 'prop-types';

const AccountDetails = ({ provider }) => {
  return (
    <section className='monthly-balance__details-account-number-info'>
      <p>
        <span className='monthly-balance__details-sort-code'>{provider.sort_code}</span>
      </p>
      <p>
        <span className='monthly-balance__details-account-number'>{provider.account_number}</span>
      </p>
    </section>
  );
};

AccountDetails.propTypes = {
  provider: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default AccountDetails;
