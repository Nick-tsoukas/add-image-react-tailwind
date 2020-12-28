import React, { useState} from 'react';
// auth context 
const ImageContext = React.createContext();

export const ImageProvider = ({children}) => {
    const [pics, setPics] = useState([
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1439405326854-014607f694d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
        'https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2106&q=80'
      ]);

    return (
        <ImageContext.Provider value={{images: pics, setImage : setPics}}>
                { children}
        </ImageContext.Provider>
    ) 
};

export default ImageContext;