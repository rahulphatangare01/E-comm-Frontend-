import {Fragment, useEffect} from "react";
import './Home.css';
import ProductCard from "./ProductCard";
import MetaData from "../Layout/metadata/MetaData";
import {getProduct,clearError} from '../../actions/productAction';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../Layout/Loader/Loader';
import { useAlert } from "react-alert";


const Home =()=>{
    const alert = useAlert();

   const dispatch = useDispatch();
   const {loading, error, products, productsCount} = useSelector((state)=>state.products)
    
   useEffect(()=>{
    if(error){
      alert.error(error);
      dispatch(clearError());
    }
dispatch(getProduct());
   },[dispatch, error, alert])

    return(
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        <MetaData title="ECOMMERCE" />

        <div className="banner">
          <p>Welcome to Ecommerce</p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1>

          <a href="#container">
            <button>
              Scroll 
            </button>
          </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </Fragment>
    )}
  </Fragment>
       
    )

}

export default Home;
