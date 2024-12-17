
import { useState, useEffect } from "react";
import axios from "axios";
function GalleryList() {
  const [galleryItems, setGalleryItems] = useState([]);

useEffect(()=>{
  fetchGalleryItems();
},[]);

   function fetchGalleryItems() {
    axios.get('/api/gallery').then (function(response){
      console.log('back from GET:', response.data);
      setGalleryItems(response.data);
    }).catch(function(err){
      console.log(err);
      alert('error getting my galleryItems');
      
    })
   }
  
  
  
  return (
      <div>
          <h1>GalleryList</h1>
      </div>
    );
}

export default GalleryList;