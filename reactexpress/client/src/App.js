import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Homepage from './Components/auth/homepage';
import './App.css';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser} from './actions/authActions';
import PrivateRoute from './Components/private-route/PrivateRoute';
import { Provider } from 'react-redux';
import store from './store';

if(localStorage.jwtToken){
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = {store} >
      <Router>
        <div className="App">
          <div className="App__Aside"></div>
            <div className="App__Form">
              <Route exact path="/" component={Register}>
              </Route>
              <Route path="/login" component={Login}>
              </Route>
              
              <Switch>
              <PrivateRoute exact path="/homepage" component={Homepage} />
              </Switch>
            </div>

        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
