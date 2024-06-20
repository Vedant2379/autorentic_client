import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import Mynavbar from './Components/Mynavbar';
import Brands from './Components/Brands';
import Guide from './Components/Guide'
import Home from './Components/Home';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Login from './Components/Login'
import Signup from './Components/Signup';
import Fleet from './Components/Fleet';
import Service from './Components/Service';
import Aboutus from './Components/Aboutus';
import VehicleList from './Components/VehicleList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from './layout/Footer';
import Newtext from './Components/Newtext';






function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <div>
              <section id='home'>
                <Mynavbar />
              </section>
              <section id='home'>
                <Home />
              </section >
              <section id='brands'>
                <Brands />
              </section>
              <section id='fleet'>
                <Fleet />
              </section >
              <section id='clients'>
                <Clients />
              </section>
              <section id='service'>
                <Service />
              </section>
              <section id='guide'>
                <Guide />
              </section>
              <section id='aboutus'>
                <Aboutus />
              </section>
              <section id='contact'>
                <Contact />
              </section>
              <Footer />
            </div>
          } />

          <Route path='/vehicles/:vBrand' element={<VehicleList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />

        </Routes>
      </Router>
      {/* <section>
      <Dashboard/>
      <Overlay/>
      </section> */}
      {/* <Mynavbar/> */}
      {/* <Home/>
      
      <Clients/>
      <Service/>
      <Guide/>
      <Contact/>
      <Footer/> */}
      {/* <Aboutus/> */}
      {/* <Newtext/> */}

    </>
  );
}

export default App;




