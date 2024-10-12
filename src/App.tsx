import { useState } from 'react';
import './App.css'
import { FirstComponent } from './exercises/01-components';
import { SecondComponent } from './exercises/02-props';
import { ThirdComponent } from './exercises/03-state';
import Effect from './exercises/04-effect';
import Fetched from './exercises/05-fetch';

function App() {

  // le quité el efecto porque renderiza muy lento todo 
  return (
    <>
    <Fetched />
      {/* 52 */}
    </>
  )
}


export default App
