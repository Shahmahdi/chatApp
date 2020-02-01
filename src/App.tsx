import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingPage } from './layouts/landing/Index';
import { SignupPage } from './layouts/signup/Index';
import { ChatLayout } from './layouts/chat/Index';

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
          <Route
            path="/chatLayout"
            exact={true}
            component={ChatLayout}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
