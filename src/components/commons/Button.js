import React from 'react';

import './Button.css';

const Button = ({ children, ...props }) => (
    <div className='Button-container'> 
        <button {...props}> {children} </button>
    </div>
);

export default Button;