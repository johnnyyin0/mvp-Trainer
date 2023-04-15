import React, {useState, useEffect} from 'react'
import Title from './Title.jsx'
import BodyMap from './BodyMap.jsx'

function Body() {

  return(
    <div className='body-container'>
      <Title/>
      <BodyMap/>
    </div>
  )
}

export default Body
