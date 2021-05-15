import React from 'react'
import Signup from './Signup'
import Dashboard from './Dashboard'
import { BrowserRouter as Router,Switch ,Route } from 'react-router-dom'
import Login from './Login'
import { AuthProvider } from '../Context/AuthContext';
import PrivateRoute from './PrivateRoute'
import ForgetPassword from './ForgetPassword'

function App() {  
  return (
    
      <Router>
        <AuthProvider>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/forgetPassword" component={ForgetPassword} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
        </AuthProvider>
      </Router>
  );
}

export default App;
