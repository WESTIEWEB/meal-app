import React, { ReactNode, Ref, useContext } from 'react';
import { apiGet } from '../utils/axios';
import {randomMealUrl, allMealsUrl} from '../utils/config/index'

interface ButtonProps {
    children: ReactNode
  }
  interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredient1: string;
    strIngredient2: string;
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
    const selectMeal = (id:string) => {
       if(meals.length > 0) {
           const meal = meals.find((meal: Meal) => meal.idMeal == id)
           setSelectedMeal(meal)
           console.log("selected meal", selectedMeal)
           setShowModal(true)
       }

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
    //trigers whenevr the component mounts
    React.useEffect(() => {
        getMeals(allMealsUrl)
    },[] )
    
    //trigers when the seacrh term changes
    React.useEffect(() => {
       if(searchTerm){
        getMeals(`${allMealsUrl}${searchTerm}`)
        console.log("meals", meals)
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
        closeModal
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

