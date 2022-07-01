import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
    const [recipeId, setRecipeId] = useState(null);
    const [recipeDetail, setRecipeDetail] = useState({})
    const getRecipe = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
        const response = await axios.get(url)
        setRecipeDetail(response.data.drinks[0])
    }
    useEffect(() => {
        if (recipeId) {
            getRecipe()
        }
    }, [recipeId])

    return (
        <ModalContext.Provider
            value={{
                recipeDetail,
                setRecipeDetail,
                setRecipeId
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}