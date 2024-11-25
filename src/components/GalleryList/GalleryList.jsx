import { useState, useEffect} from 'react';
import axios from 'axios'
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList() {
	const [galleryItems, setGalleryItems] = useState([]);


const setGalleryItem =()=>
    axios
    .get("/api/gallery")
    .then((response) => {
        console.log("get response data", response.data);
        setGalleryItems(response.data);
    })
    .catch((error) => {
        console.log(error);
    })

useEffect(() => {
getGalleryItem();
}, []);

	// Returns pics
return (
<div data-testid="galleryList" className="gallery"> 
{galleryItems.map((picture) => (
        <GalleryItem
        key ={picture.id}
        picture = {picture}    
        setGalleryItem = {setGalleryItem}
        />
    
))}

</div>

);

}

export default GalleryList;
