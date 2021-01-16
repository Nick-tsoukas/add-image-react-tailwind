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
    
    const imgContainerStyle = {columns: '320px'}
    const imgWrapperStyle = {breakInside: 'avoid-column'}
    return(
        // image masonry container
        <div className="w-screen py-10 md:px-8 lg:px-32 bg-black overflow-hidden" style={imgContainerStyle}>
            {
          images.map((image, index) => {
                  return (
                      //  image wrapper
                       <div className="py-2" style={imgWrapperStyle}>
                         <img src={image.img} key={image.img} className="rounded-xl mx-auto " />
                      </div>
                    )
                })
            }
        </div>
    )
}

export default ImageGrid;
