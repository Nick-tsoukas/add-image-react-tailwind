import logo from './logo.svg';
import './index.css';
import { useState, useEffect, useContext } from 'react';
// componets
import Header from './componets/Header';
import ImageGrid from './componets/ImageGrid';
import { ImageProvider } from './context/imageContext';
import ImageContext from './context/imageContext';


function App() {
  // const [girlPics, setGirlPics ] = useState([]);
  // This will only run once at page load the useEffect hook
// useEffect(() => {
    // const getRedheads = async () => {
    //   return await fetch("https://esits.org/tumblr-json.php?url=https://beautiful-redheads.tumblr.com", {method: 'GET'})
    //     .then(res => res.json())
    //     .then(res => res.posts
    //       .filter(post => post.type ==='photo')
    //       .map(photo => {
    //         return {
    //           img: photo["photo-url-1280"],
    //           imgThumb: photo["photo-url-1280"]
    //         }
    //       })
    //     )
    //     .catch(error => console.log('WTF!', error))
    // }
    
    // getRedheads()
    //   // .then(redheads => {console.log(redheads)});
    //   // .then((redheads) => setGirlPics((prePics) => [...redheads]));

    //   // Add the empty array as a second arg to only run once or else it will always run on any rerender 
//   },[]);

  return (
    <ImageProvider>
      <div className="h-auto w-screen">
        <Header  />
        <ImageGrid />
        </div>
    </ImageProvider>
  );
}

export default App;
