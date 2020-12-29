import { useState , useContext, useEffect } from 'react';
import '../index.css';
import "../App.css";
import ImageContext from '../context/imageContext';

const ImageGrid = (props) => {
    let { images, setImages } = useContext(ImageContext);

    useEffect(() => {
        const getRedheads = async () => {
            return await fetch("https://esits.org/tumblr-json.php?url=https://beautiful-redheads.tumblr.com", {method: 'GET'})
              .then(res => res.json())
              .then(res => res.posts
                .filter(post => post.type ==='photo')
                .map(photo => {
                  return {
                    img: photo["photo-url-1280"],
                    imgThumb: photo["photo-url-1280"]
                  }
                })
              )
              .catch(error => console.log('WTF!', error))
          }
          
          getRedheads()
            .then((redheads) => setImages((previousState) => [...redheads]));
  
    },[]);

    return(
        <div className="image_container">
            {
          images.map((image, index) => {
                  return (
                    // <div className="flex flex-col items-center justify-center border-gray-500 shadow-md border-2 rounded-md overflow-hidden h-full">
                       <div className="image">
                         <img src={image.img} key={index} className="" />
                       </div>
                    // </div>
                    )
                })
            }
        </div>
    )
}

export default ImageGrid;
