import { useState } from 'react';
import './App.css';
import Banner from './components/banner/Banner';

function App() {

 
  return (
    <div>
      <Banner
        title = 'Apuesta Ya!!'
        subTitle =  'Marcador del partido'
      />
    </div>
  );
}

export default App;
