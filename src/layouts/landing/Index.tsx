import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export const LandingPage = () => {
  return (
    <div className="flex flex-column items-center justify-center vh-100">
      <h3 className="f2 fw5 mt0">Chat App</h3>
      <Link
        to="/signup"
        className="no-underline"
      >
        <Button 
          variant="outlined" 
          color="primary" 
          
        >
          Send a message
        </Button>
      </Link>
    </div>
  )
}
