import React, {useContext, useEffect} from 'react'
import {useAppContext} from '../../Context/context'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
interface AppContextProps {
  meals: any[];
  getMeals: (url: string) => void;
}
const Meals:React.FC = () => {
  const {meals, getMeals} = useAppContext() as AppContextProps;
  const classes = useStyles();
  console.log("meals", meals)
  return (
    <Container className={classes.root}>
      <h1>Meals</h1>
      {meals.map((meal) => {
        return (
          <div key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        )
      })
      }

    </Container>
  )
}

export default Meals;