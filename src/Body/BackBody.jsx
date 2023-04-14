import React from 'react';
import BackBodySvg from '../assets/back-body.svg';

function FrontBody() {
    return(
        <div>
            <img src={BackBodySvg} alt="Back Body" style={{ height: '100%', width: '100%', maxWidth: '400px'}} />
        </div>
    )
}

export default FrontBody;
