import React from 'react';
import { useAppContext } from '../../Context/context';
import { makeStyles, styled } from '@material-ui/core/styles';
import { Meal } from '../../Context';

const MainDiv = styled('div')({
  display: 'grid',
  placeItems: 'center',
  position: 'relative',
});
const Button = styled('button')({
  fontSize: '1em',
  width: '6em',
  display: 'grid',
  border: 'transparent',
  color: '#fff',
  backgroundColor: 'transparent',
  placeItems: 'center',
  cursor: 'pointer',
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    transition: 'transform 0.2s ease-in-out',
  }
});

const favStyles = makeStyles((theme) => ({
  favDiv: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    backgroundColor: '#000',
    height: '10em',
    position: 'relative',
    // zIndex: 200,
  },
  favContainer: {
    display : 'flex',
    width: '90%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    '& h5': {
      // width: '80%',
      color: '#fff',
      // marginButtom: '0.5em',

    }
  },
  favCard: {
    display: 'flex',
    justifyContent: 'flex-start',
    // width: '100%',
    flexDirection: 'row',
    margin: 'auto',
    // alignItems: 'center',
    width: '100%',
    gap: '0.2em',
    height: '100%',
 
  },
  favaData: {
    display: 'flex',
    // margin: 'auto',
    paddingBottom: '2em',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'flex-start',
    // width: '10%',
    height: '80%',
    // width: '20%',
  },
  imgContainer: {
    width: '100%',
    height: '100%',
    // width: '10em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '0.3em 0.3em 0 0',
    // backgroundColor: '#fff',
    '& footer': {
      padding: '0.5em',
      display: 'flex',
      color : '#fff',
      fontSize: '0.6em',
      flexDirection: 'column',
      justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: '#fff',
      // width: '70%',
      // height: '40%',
      margin: 'auto',
    
    },
    "& img": {
      height: "72px",
      width: "72px",
      borderRadius: '50%',
    }
  
  },
  '@media (max-width: 768px)': {
    favaData: {
      // width: '30%',
    }
  }

}));

interface FavProps {
  removeFromFavorite: (id: string) => void;
  favorites: Record<string, any>[];
  selectMeal: any

}
const Favorites = () => {
  const favouriteClasses = favStyles();
  const { favorites, removeFromFavorite , selectMeal} = useAppContext() as FavProps;
  return (
    <div className={favouriteClasses.favDiv}>
      <div className={favouriteClasses.favContainer}>
        <h5>My Favorites</h5>
        <div className={favouriteClasses.favCard}>
          {
            favorites.map((favoriteMeal) => 
              <div className={favouriteClasses.favaData} key={favoriteMeal.idMeal}>
                {/* <span style={{color:'white', marginBottom: '0.5em'}}>{fav.strMeal}</span> */}
                <div className={favouriteClasses.imgContainer}>
                  <img src={favoriteMeal.strMealThumb} alt={favoriteMeal.strMeal} onClick={()=>selectMeal(favoriteMeal.idMeal, favoriteMeal)} />
                  <footer>
                    <Button onClick={() => removeFromFavorite(favoriteMeal.idMeal)}>
                      Remove
                    </Button>
                  </footer>
                </div>
              </div> 
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Favorites;
