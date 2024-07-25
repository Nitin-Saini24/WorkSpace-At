import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "swiper/swiper-bundle.css"


// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// if (isMobile) {
//   console.log("User is using a mobile device.");
// } else {
//   console.log("User is using a desktop device.");
// }


import { register } from 'swiper/element/bundle';
register();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
 </React.StrictMode>
)
