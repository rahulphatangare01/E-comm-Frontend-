import React from "react";
import './Home.css';
import Product from "../product/Product";
import MetaData from "../metadata/MetaData";
const Home =()=>{

    const product = {
        name:'Blue Tshirt',
        images:[{url:'https://i.ibb.co/DRST11n/1.webp'}],
        price:'$300',
        _id:"rahul"
    }
    return(
        <>
        <MetaData title="ECOMMERCE APP" />
            <div className="banner">
            <p> Welcome to Ecommerce</p>
            <h1> FIND AMAZING PRODUCTS BELOW</h1>
            <a href="#container">
            <button> Scroll</button>

            </a>

            </div>

            <h2 className="homeHeading">Featured Products</h2>
            <div className="container" id="container">

            <Product  product= {product}  />
            <Product  product= {product}  />
            <Product  product= {product}  />
            <Product  product= {product}  />


            <Product  product= {product}  />
            <Product  product= {product}  />
            <Product  product= {product}  />
            <Product  product= {product}  />


            </div>
        </>
    )

}

export default Home;
