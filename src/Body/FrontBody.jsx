import React from 'react';
import frontBodySvg from '../assets/front-body.svg';

function FrontBody() {
    return(
        <div>
            <img src={frontBodySvg} alt="Front Body" style={{ width: '100%', maxWidth: '400px' }} />
        </div>
    )
}

export default FrontBody;
