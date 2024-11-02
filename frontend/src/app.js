import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage';
//import Profile from './pages/profilePage';
import ProfilePageParams from './pages/profilePage';
//import PlaylistPage from './pages/playlistPage';
import PlaylistPageParams from './pages/playlistPage';
import SplashPage from './pages/splashPage';
import Header from './components/header';

class app extends React.Component 
{
  render() 
  {
    return (
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:userID" element={<ProfilePageParams />} />
          <Route path="/playlist/:playlistID" element= {<PlaylistPageParams />} />
          <Route path="/" element={<SplashPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default app;
