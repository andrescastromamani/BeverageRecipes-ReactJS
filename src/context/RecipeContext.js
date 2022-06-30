import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext();
export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [data, setData] = useState({});
    const [consult, setConsult] = useState(false);

    const getRecipes = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${data.name}&c=${data.category}`;
        const response = await axios.get(url);
        console.log(response.data.drinks);
        setRecipes(response.data.drinks)
    }
    useEffect(() => {
        if (consult) {
            getRecipes();
        }
    }, [data])

    return (
        <RecipeContext.Provider
            value={{
                recipes,
                setData,
                setConsult
            }}
        >
            {children}
        </RecipeContext.Provider>
    )
}