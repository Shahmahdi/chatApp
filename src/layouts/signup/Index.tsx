import React, { useState } from 'react'

export const SignupPage = () => {

  const [userSignupValues, setUserSignupValues] = useState({
    username: ''
  });

  const handleChange = (e: any) => {
    setUserSignupValues({
      username: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(userSignupValues);
  }

  return (
    <div className="form-container">
      <h1>Let's Talk</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">What is your email?</label>
        <input type="email" name="username" onChange={handleChange} className="input" />
        <button className="submit">Submit</button>
      </form>
    </div>
  )
}
