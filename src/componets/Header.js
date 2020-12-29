import { Component, useContext, useState } from 'react';
import '../index.css';
import '../App.css'
import ImageContext from '../context/imageContext';
import back  from '../freckles.jpeg'
const Header = (props) => {
    const [image, setPic ] = useState('');
    const { setImage } = useContext(ImageContext);
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setImage((preState => [...preState, image]));
        setPic('')
    }
    return(
        <div style={{backgroundImage: `url(${back})`}} className="flex h-96 header justify-center items-center">
    
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={image}
            onChange={e => setPic(e.target.value)}
            className="w-96 h-12 bg-white rounded-lg p-2" 
            placeholder="Add Picture" 
            />
             <input className="button" type="submit" value="Submit" />
        </form>
        </div>
    )
}

export default Header;