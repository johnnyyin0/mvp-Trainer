import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import axios from 'axios';
import config from "../config.js"

import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body/Body';
import ChatButton from './ChatButton'

function App() {
  // const [theme, setTheme] = useState('light')

  // useEffect(()=> {
  //   document.querySelector('html').setAttribute('data-theme', theme)
  // },[theme])

  const [data, setData] = useState([])

  useEffect(()=> {
    const options = {
      method: 'GET',
      url: 'https://musclewiki.p.rapidapi.com/exercises',
      headers: {
        'X-RapidAPI-Key': config.KEY,
        'X-RapidAPI-Host': config.HOST,
      },
    };
  
    axios.request(options)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <React.Fragment>
      <Navbar/>
      <Body data={data}/>
      <ChatButton/>
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
