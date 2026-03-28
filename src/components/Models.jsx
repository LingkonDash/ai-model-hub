import React from 'react';
import Model from './Model';

const Models = ({models}) => {
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        models.map(model => <Model key={model.id} model={model} />)
      }
    </div>
  );
};

export default Models;