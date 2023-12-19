import './App.css';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import Header from './components/Layout/header/Header';
import Footer from './components/Layout/footer/Footer';
import Home from './components/Home/Home.js';
import ProductDetails from './components/Product/ProductDetails';
import Aboutus from './components/Layout/Aboutus/Aboutus';
import Contact from './components/Layout/Contact/Contact';
import Products from './components/Product/Products.js';
import Search from './components/Product/Search.js';
import LoginRegister from './components/User/LoginRegister.js';


function App() {
  return (
  

  // <Router>
  // <Header/>
  //  <Route  extract path='/home' component={Home}/>
  // <Route  path='/product/:id' component={ProductDetails}/>
  //  <Route  extract path='/aboutus' component={Aboutus}/>
  //  <Route  extract path='/contact' component={Contact}/>
  // <Footer/>
  // </Router>
  <Router>
  <Header />
  <Route exact path="/">
    <Redirect to="/home" />
  </Route>
  <Route exact path="/home" component={Home} />
  <Route exact path="/product/:id" component={ProductDetails} />
  <Route exact path="/products" component={Products} />
  <Route path="/products/:keyword" component={Products} />

  <Route exact path="/search" component={Search} />
  <Route  exact path="/login" component={LoginRegister}  />

  <Route exact path="/aboutus" component={Aboutus} />
  <Route exact path="/contact" component={Contact} />
  <Footer />
</Router>
  )
}

export default App;
