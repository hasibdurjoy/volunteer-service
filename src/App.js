import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import VolunteerRegister from './Pages/Home/VolunteerRegister/VolunteerRegister';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/home'><Home /></Route>
          <Route path='/volunteerRegister/:serviceId'><VolunteerRegister /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
