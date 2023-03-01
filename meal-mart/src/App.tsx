import React from 'react';
import Meals from './Components/Meals/Meals';
// import Navr from './Components/NavBar/Navr';
// import Navbar from './Components/NavBar/NavBar';
import NavBar from './Components/NavBar/NavBar';
import Search from './Components/Search/Search';
import Modal from './Components/Modal/Modal';
import { useAppContext } from './Context/context';
import Favorites from './Components/Favorites/Favorites';
// import Favorites from './Components/Favorites/Favorites';
// import Search from './Components/Search/Search';
interface modalContext {
  showModal: boolean;
  favorites: Record<string, any>[];
}
function App() {
  const {showModal, favorites} = useAppContext() as modalContext;
  return (
    <>
      {/* <Navr /> */}
      {/* <Navbar/> */}
      <NavBar />
      {favorites.length > 0 &&<Favorites />}
      <Search /> 
      <Meals />

      {showModal && <Modal />}
    </>
  );
}

export default App;
