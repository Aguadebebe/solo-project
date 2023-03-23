import "./App.css";
import React from "react";

 
import ImageShow from "./components/ImageShow";

function App() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 ...">
      <h1 className="text-6xl font-bold underline bg-red-500 border rounded-lg text-lime-500">Boaz Music School Image App</h1> 
      <h2 className=" text-8xl text-gray-100 decoration-4"> Image Menu</h2>
      <h3 className="text-4xl text-sky-400">Please enter an image into the Text Box and Click on Enter</h3>
        <ul className="grid-child bg-gray-400 grid-main text-3xl text-black-500">
          <li>Bass</li>
          <li>Classical</li>
          <li>Drum</li>
          <li>Guitar</li>
          <li>Sax</li>
          <li>Security</li>
          <li>Waterfall</li>
        </ul>
        <div className="mt-10"> 
          <ImageShow />
        </div>
    </div>
  );
}

export default App;