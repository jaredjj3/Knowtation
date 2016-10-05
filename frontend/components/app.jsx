import React from 'react';
import { Link } from 'react-router';
import NavigationContainer from './navigation/navigation_container';
import Footer from './footer/footer'

const App = ({ children }) => (
  <div className='application-container'>
    <header className='navigation-bar group'>
      <nav className='navigation-items group'>
        <Link to="/"><h1 className='logo'>Knowtation</h1></Link>
        <img
          className="logo-image"
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
        />
        <NavigationContainer className="navigation-container" />
      </nav>
    </header>
    
    <Footer />
    { children }
  </div>

)

export default App;
