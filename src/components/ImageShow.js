
import React, { useState } from "react";
import Bass from "../Images/IMG_Bass.png";
import Classical from "../Images/IMG_Classical.png";
import Drum from "../Images/IMG_Drum.png";
import Guitar from "../Images/IMG_Guitar.png";
import Sax from "../Images/IMG_Sax.png";
import Security from "../Images/IMG_Security.png";
import  Waterfall from "../Images/IMG_Waterfall.png";
 
const imagesArray = [
    { id: 1, name: "Bass", value: Bass},
    { id: 2, name: "Classical", value: Classical},
    { id: 3, name: "Drum", value: Drum},
    { id: 4, name: "Guitar", value: Guitar},
    { id: 5, name: "Sax", value: Sax},
    { id: 6, name: "Security", value: Security},
    { id: 7, name: "Waterfall", value: Waterfall},
];

function ImageShow() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleSelect = () => {
    const image = imagesArray.find((image) => image.name ===  inputValue);
    if (image) {
        setSelectedImage(image);
        setInputValue(image.name);
    }
  }
    return (
        <div className="text-4xl">
           <input className="bg-gray-400" type="text" value={inputValue} placeholder="Enter Image" 
           onChange={(event) => setInputValue(event.target.value)} />
           <button className="border rounded bg-sky-600" onClick={handleSelect}>Enter</button>
          {selectedImage && (
           <img 
           src={selectedImage.value} 
           alt={selectedImage.name} 
           className="pl-72"
           key={selectedImage.id}
           />
           )}
        </div>
    );
}
export default ImageShow;




 