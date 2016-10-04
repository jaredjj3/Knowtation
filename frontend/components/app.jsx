import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';


const App = ({ children }) => (
  <div>
    <header>
      <Link to="/"><h1>Knowtation</h1></Link>
      <GreetingContainer />
    </header>
    { children }
  </div>

)

export default App;
