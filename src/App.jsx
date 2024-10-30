import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Users from './users';
import Friends from './Friends';

function App() {
  
  function handleClick(){
    alert('button clicked'); 
  }

  const handleClick2 = () => {
    alert('button clicked 2'); 
  }

  const addToFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h3>react concept 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
      <button onClick={() => {alert('third clicked')}}>Click me 3</button>
      <button onClick={() => addToFive(3)}>four</button>
    </>
  )
}

export default App
