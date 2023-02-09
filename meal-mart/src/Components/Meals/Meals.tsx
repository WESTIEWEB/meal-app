import React, {useContext, useEffect} from 'react'
import {useAppContext} from '../../Context/context'


interface AppContextProps {
  meals: any[];
  getMeals: (url: string) => void;
}
const Meals:React.FC = () => {
  const {meals, getMeals} = useAppContext() as AppContextProps;

useEffect(()=> {
  getMeals("https://jsonplaceholder.typicode.com/posts");
},[])
  console.log("meals",meals)
  return (
    <div>Meal Component</div>
  )
}

export default Meals;