import React from 'react';
import './App.scss';
import routes from './routes';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
