import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
const Header= lazy (()=>import ("./Component/Header/Header"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Footer =lazy (()=> import ("./Component/Footer/Footer"));
const Magzine = lazy(() => import('./Pages/Magzine'));
const MediaPack = lazy(() => import('./Pages/MediaPack'));
const AboutUs = lazy(() => import('./Pages/AboutUs'));
const ContactUs = lazy(() => import('./Pages/Contact'));
const AdvertiseWithUs = lazy(() => import('./Pages/AdvertiseWithUs'));
const PostPage = lazy(() => import('./Pages/PostPage'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy'));
const TermsCondition = lazy(() => import('./Pages/TermsCondition'));
// import ScrollToTopOnRouteChange from "./Component/HOC/ScrollToTopCopm";
// import MainComponent from "./Component/Slider/MainComponent";
import './App.css'
const CategoryPage = lazy(()=>import("./Pages/CategoryPage"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const SearchPage = lazy(() => import("./Pages/SearchPage"));


export default function App() {
  return (

          <Suspense>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cate/:sectionType/:sectionId" element={<CategoryPage />}/>
          <Route path="/:post" element={<PostPage />} />
          <Route path="/digital-archive" element={<Magzine />} />
          <Route path="/media-pack" element={<MediaPack />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsCondition />} />
          <Route path="/advertise" element={<AdvertiseWithUs />} /> 
          <Route path="/s" element={<SearchPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}


