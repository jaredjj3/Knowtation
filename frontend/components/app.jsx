import React from 'react';
import { Link } from 'react-router';
import NavigationContainer from './navigation/navigation_container';
import Footer from './footer/footer';
import Icon from './icon';

const App = ({ children }) => (
  <div className='application-container'>
    <header className='navigation-bar group'>
      <nav className='navigation-items group'>
        <div className='logo-container'>
          <Link to="/"><h1 className='logo'>Knowtation</h1></Link>
          <Link to="/"><Icon /></Link>
        </div>
        <NavigationContainer className="navigation-container" />
      </nav>
    </header>

    { children }

    <Footer />
  </div>

)

export default App;
