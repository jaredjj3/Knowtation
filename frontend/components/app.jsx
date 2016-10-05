import React from 'react';
import { Link } from 'react-router';
import NavigationContainer from './navigation/navigation_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className='application-container'>
    <header className='navigation-bar group'>
      <nav className='navigation-items group'>
        <Link to="/"><h1 className='logo'>Knowtation</h1></Link>
        <NavigationContainer className="navigation-container" />
      </nav>
    </header>

    { children }

    <Footer />
  </div>

)

export default App;
