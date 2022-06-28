import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CategoryContext = createContext();
export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
        const response = await axios(url);
        setCategories(response.data.drinks)
    }
    useEffect(() => {
        getCategories();
        //eslint-disable-next-line
    }, [])

    return (
        <CategoryContext.Provider
            value={{
                categories
            }}
        >
            {children}
        </CategoryContext.Provider>
    )
}