import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout(){

    return(
        <div>
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout_ad" />
            <div>
                <h2 className="checkout_title">
                    Your Shoping Basket
                </h2>
                <CheckoutProduct />
            </div>
            </div>
            <div className="checkout_rigth">

            </div>
        </div>
    )
}

export default Checkout
