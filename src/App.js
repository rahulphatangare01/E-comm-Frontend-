import './App.css';
import {BrowserRouter as Router, Route ,Switch} from "react-router-dom"
import Header from './components/Layout/header/Header';
import Footer from './components/Layout/footer/Footer';
import Home from './components/Home/Home';
import ProductDetails from './components/Product/ProductDetails';
import { Fragment } from 'react';
// import Contact from './components/Layout/Contact/Contact';


function App() {
  return (
  <Fragment>

  <Router>
  <Header/>



  <Route  extract path='/' component={Home}/>


  <Route  path='/product/:id' component={ProductDetails}/>
  
  <Footer/>
  </Router>
  </Fragment>
  )
}

export default App;
