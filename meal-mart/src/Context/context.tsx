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
    const [loading, setLoading] = React.useState<boolean>(false);
    const randomMealUrl = "www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
    const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
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
    React.useEffect(() => {
        getMeals(allMealsUrl)
        console.log("meals", meals)
    }, [])
     
  return (
    <AppContext.Provider value={{
        meals, 
        getMeals,
        loading
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

