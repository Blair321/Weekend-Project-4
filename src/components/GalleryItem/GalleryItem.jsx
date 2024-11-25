import { useState } from "react";
import React from "react";
import axios from "axios";

function GalleryItem({galleryItem, getGalleryItem}) {
    const [toggledImage, setToggledImage] = useState(null);
    const [likeCount, setLikeCount] = useState(galleryItem.likes);

   const handleToggle = () => {
    setToggledImageId ((lastToggledImageId))
lastToggledImageId === galleryItem.id ? null : galleryItem.id

}};

const handleLike = () => {
    axios
    .put(`/api/gallery/like/${galleryItem.id}`)
    .then (()=>{
     getGalleryItem();
      setLikeCount((formerCount) => formerCount +1);  
    })
.catch((error) => {
    console.error(error);
});
console.log ('Stop it! There is an error in your toggle request after: ', likeCount);
};

return (
    <div data-testid=”galleryItem”>
    {toggledImageId === galleryItem.id ? (
        <p
        data-testid="toggle"
        className="gallery"
        onClick={handleToggle}
        />
    ) : (
        <div onClick={handleToggle}>
            <img
            data-testid="toggle"
            src={galleryItem.url}
            className="gallery"
            />

</div>
 )}
 <button data-testid="like" onClick = {handleLike}>Like</button>
 </div>
);
}
    
    
export default GalleryItem
    