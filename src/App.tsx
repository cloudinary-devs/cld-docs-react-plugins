import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Cloudinary} from "@cloudinary/url-gen";
import {
	AdvancedImage,
	lazyload,
	responsive,
	accessibility,
	placeholder
} from "@cloudinary/react";

/**
 * This sample React project showcases how to use
 * @cloudinary/url-gen along with our React SDK to render CloudinaryImage.
 *
 * In addition, we showcase how to use our advanced features
 * in the form of plugins. For more information on the SDK and
 * plugins, see https://cloudinary.com/documentation/react_image_transformations#plugins
 *
 * Note: The following order of plugins should be used:
 <AdvancedImage plugins={[lazyload(), responsive(), accessibility(), placeholder()]}/>  
 */

function App() {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 
  
   const cloudinaryImage = cld.image("sample");
   const brownSheep = cld.image("brown_sheep");
   const woman = cld.image("woman");
   const cat = cld.image("fat_cat");
   const largeImage = cld.image("oil");

  return (
    <div>
    <h2>Render a Cloudinary image</h2>
    <AdvancedImage cldImg={cloudinaryImage} />
    <div style={{ height: "20px" }}></div>
    <h2>Cloudinary image with default accessibility</h2>
    <AdvancedImage cldImg={cloudinaryImage} plugins={[accessibility()]} />
    <div style={{ height: "20px" }}></div>
    <h2>Cloudinary image with colorblind accessibility</h2>
    <AdvancedImage
      cldImg={cloudinaryImage}
      plugins={[accessibility({ mode: "colorblind" })]}
    />
    <h2>Cloudinary image with responsive</h2>
    <div>Resize window to see changes (100 is the step size in px)</div>
    <AdvancedImage cldImg={cloudinaryImage} plugins={[responsive({ steps: 100 })]} />
    <h2>Scroll down to see images lazy load</h2>
    <div style={{ height: "700px" }}>
      You can open your network tab to see the images loading
    </div>
    <AdvancedImage cldImg={brownSheep} plugins={[lazyload()]} />
    <div style={{ height: "400px" }} />
    <AdvancedImage cldImg={woman} plugins={[lazyload()]} />
    <div style={{ height: "400px" }} />
    <AdvancedImage cldImg={cat} plugins={[lazyload()]} />
    <div style={{ height: "50px" }} />
    <div style={{ height: "700px" }}>
      Scroll down for lazyloading a large image with a placeholder
    </div>
    <AdvancedImage
      cldImg={largeImage}
      plugins={[lazyload(), placeholder()]}
    />
  </div>
  );
}

export default App;
