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
            // .then(redheads => {console.log(redheads)});
            .then((redheads) => setImages((previousState) => [...redheads]));
      
            // Add the empty array as a second arg to only run once or else it will always run on any rerender 
    },[]);

    return(
        // <div className="grid grid-cols-3 justify-items-center m-6 gap-10">
        <div className="image_container">
            {
                images.map((image, index) => {
                    return(
                        <img className="image" src={image.img} key={index} />
                    )
                })
            }
        </div>
    )
}

export default ImageGrid;