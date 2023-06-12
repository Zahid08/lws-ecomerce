import Navbar from "../partials/NavBar";
import ProductList from "../partials/ProductList";
import ProductAddingForm from "../partials/ProductAddingForm";
import React from "react";

export default function MainLayout(){
    return(
        <div className="App">
            <Navbar/>
            <main className="py-16">
                <div className="productWrapper">
                    <ProductList/>
                    <div>
                        <ProductAddingForm/>
                    </div>
                </div>
            </main>
        </div>
    );
}