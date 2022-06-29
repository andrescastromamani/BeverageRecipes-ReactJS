import { createContext, useState } from "react";

export const RecipeContext = createContext();
export const RecipeProvider = ({ children }) => {
    const [recipe, setRecipe] = useState([]);
    const [data, setData] = useState({});

    return (
        <RecipeContext.Provider
            value={{
                setData
            }}
        >
            {children}
        </RecipeContext.Provider>
    )
}