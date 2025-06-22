import Header from './component/header/Header';
import Hero from './component/hero/Hero';
import Security from './component/security/Security';
import Savings from './component/savings/Savings';
import Investment from './component/investment/Investment';
import Video from './component/video/video';
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
      </div>
  )
}

export default App;
