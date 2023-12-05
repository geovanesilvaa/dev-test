import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import UserDetails from "./pages/UserDetails/UserDetails";
import NotFound from "./pages/NotFound/NotFound";
import PostsDetails from "./pages/PostsDetails/PostsDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/userDetails/:id" element={<UserDetails />} />
        <Route path="/postsDetails/:id" element={<PostsDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
