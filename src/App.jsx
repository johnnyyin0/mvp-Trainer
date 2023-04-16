import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body/Body';
import Chat from './Chat'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(()=> {
    document.querySelector('html').setAttribute('data-theme', theme)
  },[theme])

  return (
    <React.Fragment>
      <Navbar setTheme={setTheme}/>
      <Body />
      <Chat/>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
