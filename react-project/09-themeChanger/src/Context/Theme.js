import { createContext,useContext } from "react";
export const ThemeContext = createContext({
    themeMode:'light',
    darkMode:()=>{},
    lightMode:()=>{}
})
export const ThemeProvier = ThemeContext.Provider;
export function useTheme(){
    return useContext(ThemeContext)
} 