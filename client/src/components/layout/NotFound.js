import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' /> Página não encontrada
      </h1>
      <p className='large'>Desculpe, mas essa página não existe!</p>
    </Fragment>
  );
};

export default NotFound;
