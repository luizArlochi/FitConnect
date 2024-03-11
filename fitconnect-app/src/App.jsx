import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import RecoveryCode from './pages/RecoveryCode';
import PasswordReset from './pages/PasswordReset';

function App (){
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/recovery-code" component={RecoveryCode} />
        <Route path="/password-reset" component={PasswordReset} />
      </Switch>
    </Router>
  );
};

export default App;