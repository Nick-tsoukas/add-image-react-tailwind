import { useState , useContext, useEffect } from 'react';
import '../index.css';
import "../App.css";
import ImageContext from '../context/imageContext';
import Masonry from 'react-masonry-css'

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center m-6 gap-4 bg-gray-900">
        {/* <div className="flex flex-row justify-items-center m-6 gap-4 bg-gray-900"> */}
            {
          images.map((image, index) => {
                  // const divStyle = { width: 'calc(100%/3)'}
                  return (
                    <div className="flex flex-col items-center justify-center border-gray-500 shadow-md border-2 rounded-md overflow-hidden h-full">
                       <div className="w-full inline-block">
                         <img src={image.img} key={index} className="" />
                       </div>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default ImageGrid;
