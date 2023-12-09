import {useEffect} from "react";
import './Home.css';
import Product from "../product/Product";
import MetaData from "../metadata/MetaData";
import {getProduct} from '../../../actions/productAction';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../Loader/Loader'



const Home =()=>{
   const dispatch = useDispatch();
   const {loading, error, products, productsCount} = useSelector((state)=>state.products)
    
   useEffect(()=>{
dispatch(getProduct());
   },[dispatch])

    return(
       <>
        {
            loading ? (<Loader/>):(
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

            {/* <Product  product= {product}  /> */}

            {
                products && products.map(product =>(
                  <Product  product= {product}  />
                ))
            }
         


            </div>
        </>
            )
        }
       </>
    )

}

export default Home;
