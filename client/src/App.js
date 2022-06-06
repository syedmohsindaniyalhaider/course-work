import { useState } from 'react';
import './App.css';
import SignIn from './Components/Login/Login'
import Reducer from './Components/Reducer/Reducer';
// import Expense from './Components/Expense'; Don't remove this

function App() {

  return (
    <>
      <Reducer />
      {/* <div className="container">
        <SignIn />
      </div> */}
      {/* <Expense /> Don't remove this */}
    </>
  );
}

export default App;
