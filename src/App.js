import './App.css';

import Navbar from './navbar/Navbar';
import Main from './main/Main';
import Features from './features/Features';
import Statistics from './statistics/Statistics';
import Technology from './technology/Technology';
import Security from './security/Security';
import Price from './pricing/Pricing';
import Testimonial from './testimonial/Testimonial';
import Download from './download/Download';
import Footer from './footer/Footer';

// const Company = (props) => {
//   return (
//     <>
//       <h1>{props.name}</h1>
//       <p>{props.description}</p>
//     </>
//   )
// }

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Features />
      <Statistics />
      <Technology />
      <Security />
      <Price />
      <Testimonial />
      <Download />
      <Footer />
    </>
  )
}

export default App;
