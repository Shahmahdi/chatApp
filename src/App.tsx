import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingPage } from './layouts/landing/Index';
import { SignupPage } from './layouts/signup/Index';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact={true}
            component={LandingPage}
          />
          <Route
            path="/signup"
            exact={true}
            component={SignupPage}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
