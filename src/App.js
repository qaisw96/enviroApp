import './css/app.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import Initiatives from './components/Initiatives'
import ContactUs from './components/ContactUs'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
          <Header />
          <div className="app">
            <Hero />
            <AboutUs />
          </div>
          <Footer />

      </Route>

      <Route  path="/initiatives">
          <Header />
            <div className="app">
              <Initiatives />
            </div>
          <Footer />
      </Route>

      <Route  path="/contact">
          <Header />
            <div className="app">
              <ContactUs />
            </div>
          <Footer />
      </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
