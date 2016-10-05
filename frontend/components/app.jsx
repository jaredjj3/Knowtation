import React from 'react';
import { Link } from 'react-router';
import NavigationContainer from './navigation/navigation_container';


const App = ({ children }) => (
  <div>
    <header>
      <Link to="/"><h1>Knowtation</h1></Link>
      <NavigationContainer className="navigation-container" />
    </header>
    { children }
  </div>

)

export default App;
