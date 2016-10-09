import React from 'react';

const ErrorItems = ({ errors }) => {
  const errorItems = errors.map((error, idx) => (
    <li key={ idx }>{ error }</li>
  ));

  return (
    <ul className='errors'>
      { errorItems }
    </ul>
  );
};

export default ErrorItems;
