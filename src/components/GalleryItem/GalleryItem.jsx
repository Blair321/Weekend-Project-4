import { useState } from "react";
import axios from "axios";

function GalleryItem(galleryItem) {
  const [ showPic, setShowPic] = useState(true);

function addLike() {
  console.log('add Like:', galleryItem.galleryItem.id);
  axios.put(`/api/gallery?id=${ galleryItem.galleryItem.id }`)
  .then(function(response){console.log('back from put:',response.data);
  }).catch(function(err){
    console.log(err);
    alert('error adding like');
  })
  
}

    return (
      <div data-testid="galleryItem">
          <h1>{galleryItem.galleryItem.title}</h1>
          <div data-testid="toggle"onClick={ ()=> {setShowPic(!showPic)}}>
            {
              showPic ?
          <img src={galleryItem.galleryItem.url} width='250px'/>
          :
          <p>{galleryItem.galleryItem.description}</p>
            }
         </div>
         <p>Likes: {galleryItem.galleryItem.likes} <button data-testid="like"onClick={addLike}>+</button></p>
      </div>
    );
}

export default GalleryItem;