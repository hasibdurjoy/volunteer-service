import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import VolunteerRegister from './Pages/Home/VolunteerRegister/VolunteerRegister';
import AuthProvider from './Context/AuthProvides';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';

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
            <Route path='/volunteerRegister/:serviceId'><VolunteerRegister /></Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
