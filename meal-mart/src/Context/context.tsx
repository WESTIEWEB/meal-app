import React, { ReactNode, Ref, useContext } from 'react';
import { apiGet } from '../utils/axios';
import {randomMealUrl, allMealsUrl} from '../utils/config/index'
import { Meal } from '.';

interface ButtonProps {
    children: ReactNode
  }
 
// type ButtonProps = {
//     children: ReactNode;
    
// }
const AppContext = React.createContext<unknown | undefined>(undefined);

const AppProvider = ({ children }:ButtonProps) => {
    const [meals, setMeals] = React.useState<Record<string, any>>([]);
    const [searchTerm, setSearchTerm] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [selectedMeal, setSelectedMeal] = React.useState<Record<string, any>>({});
    const [favorites, setFavorites] = React.useState<Array<Meal>>([]);

    // a function to fetch meals
    const getMeals = async (url: string) => {
        setLoading(true);
        try{
            const {data} = await apiGet(url)
            // console.log(res.json())
            if(data.meals) {
                const {meals} = data;
                setMeals(meals)
            }else {
                setMeals([]);
            }
            setLoading(false);
        }catch(err) {
            console.log(err)
        }
    }

    //a fuction to fetch selected mean by id
    const selectMeal = (id:string, favoriteMeal:Meal) => {
        let meal;
        if(favoriteMeal) {
            meal = favorites.find((meal:Meal) => meal.idMeal === id);
        }
        else {
            meal = meals.find((meal: Meal) => meal.idMeal == id)
        }
        setSelectedMeal(meal)
        if(selectedMeal) console.log("selected meal", selectedMeal,"meal", meal)
        console.log(id)
        setShowModal(true)

        return

    }
    //responsible for closing the modal
    const closeModal = () => {
        setShowModal(false);
    }
    //a function that gets a random meal
    const getRandomMeal = () => {
       getMeals(randomMealUrl);
       console.log("random meal", meals)
    }
    //a function to handle add to favourite 
    const addToFavorite = (id: string) => {
        let meal = meals.find((meal: Meal) => meal.idMeal == id);
        //checks if the meal is already in favorite list
        const isFavorite = favorites.find((meal: Meal) => meal.idMeal === id)
        if(isFavorite) return;
        const updatdeFavorites = [{...favorites, meal}];
        setFavorites([...favorites, meal]);
        console.log("favorites", favorites)
    }

    //a function to handle remove from favourite 
    const removeFromFavorite = (id: string) => {
        const updateFavorites = favorites.filter((meal: Meal) => meal.idMeal !== id);
        setFavorites(updateFavorites);
    }
    //trigers whenevr the component mounts
    React.useEffect(() => {
        getMeals(allMealsUrl)
    },[] )
    
    //trigers when the seacrh term changes
    React.useEffect(() => {
       if(searchTerm){
        const getData = setTimeout(() => {
            getMeals(`${allMealsUrl}${searchTerm}`)
            console.log("meals", meals)
        }, 2000);
        return () => clearTimeout(getData);
       }
       else return
    }, [searchTerm])
     
  return (
    <AppContext.Provider value={{
        meals, 
        loading,
        setSearchTerm,
        getRandomMeal,
        showModal,
        selectMeal,
        selectedMeal,
        setSelectedMeal,
        closeModal,
        addToFavorite,
        removeFromFavorite,
        favorites      
        }}>
        {children}
    </AppContext.Provider>
  )
}
export default AppProvider;

export const useAppContext = () => {
    
      
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
};

