import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import LoginScreen  from './components/LoginScreen';
import './App.css';
import RegistrationScreen from './components/RegistrationScreen.js';
import ReviewScreen from './components/ReviewScreen';

function App() {

  return (
    <div>
        <BrowserRouter>
          <Switch>
              <Route path='/' exact={true} component={MainScreen} />
              <Route path='/register' exact={true} component={RegistrationScreen}/>
              <Route path='/login' exact={true} component={LoginScreen}/>
              <Route path='/review' exact={true} component={ReviewScreen}/>
          </Switch>        
        </BrowserRouter>
    </div>
  );
}

export default App;
