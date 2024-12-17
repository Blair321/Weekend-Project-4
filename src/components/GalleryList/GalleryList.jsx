
import { useState, useEffect } from "react";
import axios from "axios";
import GalleryItem from "../GalleryItem/GalleryItem";
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
      <div data-testid="galleryList">
          <h1>GalleryList</h1>
{galleryItems.map((galleryItem,index)=>(
  <GalleryItem key={index} galleryItem={ galleryItem}/>
))

}
      </div>
    );
}

export default GalleryList;