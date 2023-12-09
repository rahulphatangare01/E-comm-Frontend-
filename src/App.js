import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from './components/Layout/header/Header';
import Footer from './components/Layout/footer/Footer';
import Home from './components/Layout/home/Home';

function App() {
  return (
  <>
  <Router>

    <Route  extract path='/' component={Home} />

    <Header/>
    <Footer/>
  </Router>
  </>
  );
}

export default App;
