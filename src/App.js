
import { BrowserRouter as Router,Switch,Route,Header } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

// pages
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Dash from './pages/Dash'

// components 

import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <div>
            <Route path = '/' exact component = { Home } > <Home /> </Route>
            <Route path = '/register' exact component = { Register } > <Register /> </Route>
            <Route path = '/login' exact component = { Login } > <Login /> </Route>
            <Route path = '/Home' exact component = { Dash } > <Dash /> </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
