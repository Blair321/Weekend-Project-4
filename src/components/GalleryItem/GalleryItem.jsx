import { useState } from "react";
function GalleryItem(galleryItem) {
  
    return (
      <div>
          <h1>{galleryItem.galleryItem.title}</h1>
          <img src={galleryItem.galleryItem.url} width='250px'/>
          <p>{galleryItem.galleryItem.description}</p>
      </div>
    );
}

export default GalleryItem;