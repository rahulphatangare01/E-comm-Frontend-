import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearError,
  getProduct,
  getProductDetails,
} from "../../actions/productAction";
import Loader from "../Layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from '@mui/material/Slider';
import { Typography } from "@mui/material";
// import { Category } from "@mui/icons-material";
  

const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0,25000]);
  const [category,setCategory] =useState('');
  const [ratings ,setRatings] = useState(0);

  const { products, loading, error, productsCount, resultPerPage ,filtererdProductCount } =
    useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const priceHandler =(e, newPrice)=>{
    setPrice(newPrice)

  }

  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings]);

  let count = filtererdProductCount;

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h2 className="productsHeading"> Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          <div className="filterBox">
          <Typography> Price</Typography>
          <Slider  
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={25000}
          />

          <Typography>Categories </Typography>
          <ul className="categoryBox" >
          {categories.map((Category)=>(
            <li className="category-link"  key={Category}
            onClick={()=> setCategory(Category)}
            >
            {Category}

            </li>
          ))}
          </ul>

          <fieldset>
            <Typography component='legend'>Ratings Above</Typography>
            {/* <legend>Ratings Above</legend> */}
            <Slider 
            value={ratings}
            onChange={(e,newRating)=>{
                setRatings(newRating);
            }}
            aria-labelledby="continuous-slider"
            min={0}
            max={5}
            valueLabelDisplay="auto"
            />
          </fieldset>
          </div>


         {
            resultPerPage < count && (
                <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />


            </div>

            )
         }
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
