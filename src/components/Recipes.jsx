import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeContext'
import { Recipe } from './Recipe';

export const Recipes = () => {
    const { recipes } = useContext(RecipeContext);
    return (
        <div className='row mt-5 mb-5'>
            <h2 className='text-center'>Recipes List</h2>
            <hr />
            {
                recipes.map((recipe) => {
                    return (
                        <Recipe
                            key={recipe.idDrink}
                            recipe={recipe}
                        />
                    )
                })
            }
        </div>
    )
}
