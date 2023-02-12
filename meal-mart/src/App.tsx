import React from 'react';
import Meals from './Components/Meals/Meals';
import Navr from './Components/NavBar/Navr';
import Navbar from './Components/NavBar/NavBar';
import Search from './Components/Search/Search';
// import Modal from './Components/Modal/Modal';
// import Favorites from './Components/Favorites/Favorites';
// import Search from './Components/Search/Search';

function App() {
  return (
    <>
      <Navr />
      {/* <Navbar/> */}
      <Search /> 
      <Meals />

      {/* <Modal />
      <Favorites />
      */}
    </>
  );
}

export default App;
