import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Body from './Body/Body.jsx';

function Index() {
  const [theme, setTheme] = useState('light')

  useEffect(()=> {
    document.querySelector('html').setAttribute('data-theme', theme)
  },[theme])

  return (
    <React.Fragment>
      <Navbar setTheme={setTheme}/>
      <Body />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
