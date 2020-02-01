import React, { useState } from 'react'
import { createChatkitUser } from '../../stores/chat/Actions';
import { connect } from 'react-redux';

const SignupPageComponent = (props: {
  createChatkitUser: (userSignupValues: any) => void;
}) => {

  const [userSignupValues, setUserSignupValues] = useState({
    username: ''
  });

  return (
    <div className="form-container">
      <h1>Let's Talk</h1>
      <form className="form">
        <label htmlFor="email">What is your email?</label>
        <input
          type="email"
          name="username"
          onChange={e => {
            setUserSignupValues({
              username: e.target.value
            });
          }}
          className="input"
        />
        <button
          className="submit"
          onClick={e => {
            e.preventDefault();
            props.createChatkitUser(userSignupValues);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export const SignupPage = connect(null, { createChatkitUser })(SignupPageComponent);
