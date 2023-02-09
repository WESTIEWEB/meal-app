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
    const getMeals = async (url: string) => {
        try{
            const res = await axios.get(url)
            setMeals(res.data);
        }catch(err) {
            console.log(err)
        }
    }
    React.useEffect(() => {
        console.log("use effect")
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

