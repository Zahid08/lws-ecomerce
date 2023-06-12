import Navbar from "../partials/NavBar";
import React from "react";
import CartList from "../partials/CartList";
import BillDetails from "../partials/BillDetails";

export default function CartDetailsPage(){
    return(<>
        <div className="App">
            <Navbar/>
            <main className="py-16">
                <div className="container 2xl:px-8 px-2 mx-auto">
                    <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                    <div className="cartListContainer">
                        <div className="space-y-6">
                            <CartList/>
                        </div>
                        <div>
                            <BillDetails/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </>);
}