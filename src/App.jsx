import Header from './component/header/Header';
import Hero from './component/hero/Hero';
import Security from './component/security/Security';
import Savings from './component/savings/Savings';
import Investment from './component/investment/Investment';
import Video from './component/video/video';
import Customers from './component/customers/customers';
import Featured from './component/featured/Featured';
import Footer from './component/footer/Footer';
import './App.css';

const App = () => {
  return (
      <div className='container'>
        <Header />
        <Hero />
        <Security />
        <Savings />
        <Investment />
        <Video />
        <Customers />
        <Featured />
        <Footer />
      </div>
  )
}

export default App;
