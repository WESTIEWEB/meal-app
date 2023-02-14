import React, { useContext, useEffect } from "react";
import { useAppContext } from "../../Context/context";
import {BsHandThumbsUp} from 'react-icons/bs';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    '& h1': {
      fontWeight: '700 bold',
    }
  },
  card: {
    display: "flex",
    flelexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    margin: '2.5em 0 2.5em 0'
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "space-between",
    width: '30%',
    height: '20% !important',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',   
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5em",
    '& h4': {
      // height: '2em',
      width: '40%',
      // margin: 'auto',
      // textAlign: 'center',
      fontWeight: '400',
      color: '#000',
      fontFamily: 'open sans',
      fontSize: '0.8rem',
    },
    '& button': {
      width: '20%',
      maxHeight: '2em',
      backgroundColor: 'transparent',
      border: 'none',
      transition: 'all 0.3s ease',
      lineHeight: '1em',
      '& :hover': {
        cursor: 'pointer',
      }
    },
    '& button:hover': {
      color: "f00",
      transform: 'translateY(+2px)'
    }
  }
  ,
  img: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  }
  ,
  '@media (max-width: 600px)': {
    card: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    cards: {
      width: '80% !important',
    }
  },
  '@media (max-width: 900px)': {
    cards: {
      width: '45%',
    }
  }
}));
interface AppContextProps {
  meals: any[];
  loading: boolean;
  getMeals: (url: string) => void;
  selectMeal: (id: string) => void;
  addToFavorite: (id: string) => void;
}
const Meals: React.FC = () => {
  const { meals, getMeals, loading, selectMeal, addToFavorite } = useAppContext() as AppContextProps;
  const classes = useStyles();
  console.log("meals", meals);

  if(loading){
    return (
      <Container className={classes.rootContainer}>
        <h4>Loading...</h4>
      </Container>
    )
  }

  if(meals.length === 0) {
    return (
      <Container className={classes.rootContainer}>
        <h4>No Meals Matched Your Search Tearm. Please try again</h4>
      </Container>
    )
  }
  return (
    <Container className={classes.rootContainer}>
      <h1>Meals</h1>
      <div className={classes.card}>
        {meals.map((meal) =>
         {
          const {strMealThumb:image,idMeal:id, strCategory:category, strInstructions:instructions, strMeal: title } = meal
          return (
            // <div key={meal.idMeal}>
            //   <h2>{meal.strMeal}</h2>
            //   <img src={meal.strMealThumb} alt={meal.strMeal} />
            // </div>
            <Card variant={"outlined"} className={classes.cards} key={id}>
              <img className={classes.img} src={image} alt={meal.strMeal} onClick={()=> selectMeal(id)} />
              <footer className={classes.footer}>
                <h4>{title}</h4>
                <button onClick={() => addToFavorite(id)}>
                  <BsHandThumbsUp />
                </button>
              </footer>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default Meals;
