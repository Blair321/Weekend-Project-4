import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";

import GalleryList from "../GalleryList/GalleryList";
import './App.css'

function App() {
  const [galleryItems, fetchGalleryItems] = useState([]);

  const fetchGallery = () => {
    console.log('In fetch function')
    axios
    .get("/api/gallery")
    .then((response) => {
      console.log(response)
      fetchGallery(response.data);
    })
    .catch((error) => {
      console.log('Oh no, there was an error in your GET request: ', error)
      res.sendStatus(error)
    })
  }

  useEffect(() => {
  fetchGallery();
}, []);

    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/goat_stache.png"/>
      </div>
    );
}

export default App;
