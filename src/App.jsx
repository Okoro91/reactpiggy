import Header from './component/header/Header';
import Hero from './component/hero/Hero';
import Security from './component/security/Security';
import Savings from './component/savings/Savings';
import './App.css';

const App = () => {
  return (
      <div className='container'>
        <Header />
        <Hero />
        <Security />
        <Savings />
      </div>
  )
}

export default App;
