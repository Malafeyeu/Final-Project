import { IConfirmed } from '../../types';
import { Link } from 'react-router-dom'
import React from 'react';

const Confirmed = (props: IConfirmed) => {
  const { text } = props;
  return (
    <div className='container-confirmed'>
      <div className='container-confirmed_block'>
        <Link to='/'>
          <p className='container-confirmed__link'>
            Back to home
          </p>
        </Link>
        <div className='flex-container'>
          <div className='block-w-info'>
          {!text ? 
            <p className='container-confirmed__text'>
              Email confirmed.
              <React.Fragment><br/></React.Fragment>
              Your registration is now completed!
              <React.Fragment><br/></React.Fragment>
            </p>
            :
            <p className='container-confirmed__text'>{text}</p>
          }
            <button
              className='btn-confirmed'
              content='Go to home'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Confirmed };