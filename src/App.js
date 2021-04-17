import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

import mealsImage from './assets/meals.jpg';
import {CartProvider} from './Store/cart-context'
import './app.css'

function App() {
  return (
    <CartProvider>
      <Header/>
      <div className="main-image">
        <img src={mealsImage} alt="meals"/>
      </div>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
