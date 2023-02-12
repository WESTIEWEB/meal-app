import React from 'react';
import Meals from './Components/Meals/Meals';
import Navr from './Components/NavBar/Navr';
import Navbar from './Components/NavBar/NavBar';
import Search from './Components/Search/Search';
import Modal from './Components/Modal/Modal';
import { useAppContext } from './Context/context';
// import Favorites from './Components/Favorites/Favorites';
// import Search from './Components/Search/Search';
interface modalContext {
  showModal: boolean;
}
function App() {
  const {showModal} = useAppContext() as modalContext;
  return (
    <>
      <Navr />
      {/* <Navbar/> */}
      <Search /> 
      <Meals />

      {showModal && <Modal />}
      {/* <Favorites />
      */}
    </>
  );
}

export default App;
