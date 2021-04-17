import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

import mealsImage from './assets/meals.jpg';
import './app.css'
function App() {
  return (
    <div className="app">
      <Header/>
      <div className="main-image">
        <img src={mealsImage} alt="meals"/>
      </div>
      <main>
        <Meals/>
      </main>
    </div>
  );
}

export default App;
