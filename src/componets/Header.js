// import { Component, useContext, useState } from 'react';
import '../index.css';
import '../App.css'
// import ImageContext from '../context/imageContext';
const back  = '../freckles.jpeg'
// import back  from '../freckles.jpeg'
const backgroundStyles = {  
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // backgroundPosition: '50% 50%',
    // bach
    // backgroundPosition: 'center' 
}

const Header = () => {
    
    return(
        <div>
            <div style={{backgroundImage: `url(${back})`, ...backgroundStyles}} className="overflow-hidden bg-center bg-cover bg-no-repeat h-96 w-full">
            </div>
        </div>
            
    )
}

export default Header;