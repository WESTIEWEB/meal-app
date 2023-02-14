import React from 'react';
import { useAppContext } from '../../Context/context';
import { makeStyles } from '@material-ui/core/styles';

const favStyles = makeStyles((theme) => ({
  favDiv: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    backgroundColor: '#000',
  },
  favContainer: {
    display : 'flex',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    '& h5': {
      width: '100%',

    }
  },
  favCard: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
  },
  favaData: {
    display: 'flex',
    flexDirection: 'column',
    // width: '20%',
  },
  imgContainer: {
    // width: '100%',
  
  }

}));

interface FavProps {
  removeFromFavorite: (id: string) => void;
  favorites: Record<string, any>[];
}
const Favorites = () => {
  const favouriteClasses = favStyles();
  const { favorites, removeFromFavorite } = useAppContext() as FavProps;
  return (
    <div className={favouriteClasses.favDiv}>
      <div className={favouriteClasses.favContainer}>
        <h5>Favorites</h5>
        <div className={favouriteClasses.favCard}>
          {
            favorites.map((fav) => 
              <div className={favouriteClasses.favaData} key={fav.idMeal}>
                <h5>Favorites</h5>
                <div className={favouriteClasses.imgContainer}>
                  <img src={fav.strMealThumb} />
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
