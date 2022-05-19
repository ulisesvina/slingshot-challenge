import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import { Router, Route} from 'wouter';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="parent-div">
      <Header/>
      <div className="mt-6 mb-20">
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Router>
      </div>
      <Footer/>
    </div>
  </React.StrictMode>
)
