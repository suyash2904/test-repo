// eslint-disable-next-line
import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import MynftProductPage from "./components/MynftProductPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import WalletPage from "./components/WalletPage";
import CategoryPage from "./components/CategoryPage";
import Logout from "./components/Logout";
// import Profile from "./components/Profile";
import getFunds from "./components/getFunds";
import Profile from "./components/Profile";
import CreateNft from "./components/CreateListNft";
import Mynfts from "./components/Mynfts";
import ResellNFT from "./components/Resellnft";
import MyListedNFT from "./components/MyListedNfts";
adad;
adadd


const loggedIn = sessionStorage.getItem('LoggedIn')




function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:tokenId" element={<ProductPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/connection" element={<WalletPage />} /> */}
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/Profile" element={<Profile />} /> */}
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/getFunds" element={<getFunds />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/createNft" element={<CreateNft />} />
      <Route path="/mynfts" element={<Mynfts />} />
      <Route path="/mylistednfts" element={<MyListedNFT />} />
      <Route path="/mynft/product/:tokenId" element={<MynftProductPage />}/>
      <Route path="/resellnft/:tokenId" element={<ResellNFT/>}/>
    </Routes>
  );
}

export default App;
