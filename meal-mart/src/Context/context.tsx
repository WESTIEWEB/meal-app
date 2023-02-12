import React, { ReactNode, Ref, useContext } from 'react';
import axios from 'axios';

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
    const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php"
    const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="
    const getMeals = async (url: string) => {
        setLoading(true);
        try{
            const {data} = await axios.get(url)
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
    const getRandomMeal = () => {
       getMeals(randomMealUrl);
       console.log("random meal", meals)
    }
    React.useEffect(() => {
        getMeals(allMealsUrl)
    },[] )
     
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
        getRandomMeal
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

