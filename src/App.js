import Header from './components/Layout/Header'

import mealsImage from './assets/meals.jpg';

import './app.css'
function App() {
  return (
    <div className="app">
      <Header/>
      <div className="main-image">
        <img src={mealsImage} alt="meals"/>
      </div>
      {/* <Meals/> */}
    </div>
  );
}

export default App;
