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
    const randomMealUrl = "www.themealdb.com/api/json/v1/1/lookup.php?i=52772"
    const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
    const getMeals = async (url: string) => {
        try{
            const {data} = await axios.get(url)
            // console.log(res.json())
            setMeals(data.meals);
        }catch(err) {
            console.log(err)
        }
    }
    React.useEffect(() => {
        getMeals(allMealsUrl)
        console.log("meals", meals)
    }, [])
     
  return (
    <AppContext.Provider value={{name:"hello",meals, getMeals}}>
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

