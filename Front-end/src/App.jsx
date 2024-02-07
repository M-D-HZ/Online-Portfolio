import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas} from './components';
import React from 'react';
const LazyTech = React.lazy(() => import('./components/Tech.jsx'));

const App = () =>{
  return (
      <BrowserRouter>
          <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar/>
                  <Hero/>
              </div>
              <About/>
              <Experience/>
              <React.Suspense fallback={"Loading..."}>
                  <LazyTech/>
              </React.Suspense>
              {/*<LazyTech/>*/}
              <Works/>
              {/*<Feedbacks/>*/}
              <div className="relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-center items-center ">
                  <Contact/>
                  {/*<StarsCanvas/>*/}
              </div>
          </div>
      </BrowserRouter>
  )
}

export default App
