import { useState , useContext } from 'react';
import '../index.css';
import "../App.css";
import ImageContext from '../context/imageContext';


const ImageGrid = (props) => {
    // const [pics, setPics] = useState([
    //     'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    //     'https://images.unsplash.com/photo-1439405326854-014607f694d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    //     'https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2106&q=80',
    //     'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    //     'https://images.unsplash.com/photo-1439405326854-014607f694d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    //     'https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2106&q=80'
    //   ]);
    let { images} = useContext(ImageContext)

    return(
        <div className="grid grid-cols-3 justify-items-center m-6 gap-10">
            {
                images.map((image, index) => {
                    return(
                        <img src={image} key={image} />
                    )
                })
            }
        </div>
    )
}

export default ImageGrid;