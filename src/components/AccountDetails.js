import React from 'react';
import PropTypes from 'prop-types';

const AccountDetails = ({ provider }) => {
  return (
    <section className='monthly-balance__details-account-number-info'>
      <p className='monthly-balance__details-sort-code'>{provider.sort_code}</p>
      <p className='monthly-balance__details-account-number'>{provider.account_number}</p>
    </section>
  );
};

AccountDetails.propTypes = {
  provider: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default AccountDetails;
