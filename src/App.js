
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

// pages
import Home from './pages/Home'
import Register from './pages/Register'

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
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
