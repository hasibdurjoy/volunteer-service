import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import VolunteerRegister from './Pages/Home/VolunteerRegister/VolunteerRegister';
import AuthProvider from './Context/AuthProvides';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import RegisteredEvents from './Pages/Home/RegisteredEvents/RegisteredEvents';
import Admin from './Pages/Admin/Admin/Admin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route path='/home'><Home /></Route>
            <Route path='/login'><Login /></Route>
            <Route path='/register'><Register /></Route>
            <Route path='/admin'><Admin /></Route>
            <PrivateRoute path='/volunteerRegister/:serviceId'><VolunteerRegister /></PrivateRoute>
            <PrivateRoute path='/volunteers/:uid'><RegisteredEvents /></PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
