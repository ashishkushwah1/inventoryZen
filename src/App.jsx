import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Companies from './components/Companies';
import Joinus from './components/Joinus';
import Products from './components/Products';
import Arrivals from './components/Arrivals';
import Sale from './components/Sale';
import Favourite from './components/Favourite';
function App() {

  return (
    <div className='pt-10'>
      <Header />
      <Home />
      <Companies />
      <Arrivals />
      <Sale />
      <Favourite />
      <Products />
      <Joinus />
      <Footer />
    </div>
  );
}

export default App
