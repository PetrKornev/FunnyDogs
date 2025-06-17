import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './myComp/Header';
import Dinamic from './myComp/Dinamic';
import Get from './myComp/Get';

function App() {
  return (
    <>
      <Header />
      <Dinamic />
    </>
  );
}

export default App;
