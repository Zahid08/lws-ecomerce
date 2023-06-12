import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import CartDetailsPage from "./components/Pages/CartDetailsPage";

function Root() {
  return (<>
      <BrowserRouter basename="/">
        <Routes>
            <Route path={`/`} element={<MainLayout/>}/>
            <Route path={`/cart`} element={<CartDetailsPage/>}/>
        </Routes>
      </BrowserRouter>
  </>);
}
export default Root;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>
);
