import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import Home from './Components/Home';
import Redirection from "./Components/Redirection";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/:code' component={Redirection} />
      </Router>
    </div>
  )
}

export default App;
