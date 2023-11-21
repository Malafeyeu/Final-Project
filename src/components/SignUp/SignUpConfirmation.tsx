import React from 'react';
import { ISignUpConfirmation } from '../../types';
import { Link } from 'react-router-dom'


const SignUpConfirmation = (props: ISignUpConfirmation) => {
  const {text, email} = props;
  return (
    <div className='container-signUp-confirmation'>
      <div className='container-signUp-confirmation_block'>
        <Link to='/'>
          <p className='container-signUp-confirmation__link'>
            Back to home
          </p>
        </Link>
        <div className='flex-container'>
          <div className='block-w-info'>
          {!text ? 
            <p className='container-registration__text'>
              Please activate your account with the activation
              <React.Fragment><br/></React.Fragment>
              link, in the email <b>{email}</b>.
              <React.Fragment><br/></React.Fragment>
              Please, check your email.
            </p>
            :
            <p className='container-signUp-confirmation__text'>{text}</p>
          }
            <button content='Go to Home' className='block-w-info__btn'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export { SignUpConfirmation }
