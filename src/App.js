
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

// pages
import Home from './pages/Home'

// components  
import Headers from './components/Headers'

import 'semantic-ui-css/semantic.min.css'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <div>
            <Headers/>
            <Route path = '/' exact component = { Home } > <Home /> </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
