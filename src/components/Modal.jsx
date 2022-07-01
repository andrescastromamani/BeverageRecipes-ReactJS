import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'

export const Modal = () => {
    const { setRecipeId, recipeDetail, setRecipeDetail } = useContext(ModalContext);
    const { strDrink, strInstructions, strDrinkThumb } = recipeDetail;
    const getIngredients = () => {
        const ingredients = [];
        for (let i = 1; i < 16; i++) {
            if (recipeDetail[`strIngredient${i}`]) {
                ingredients.push(
                    `${recipeDetail[`strIngredient${i}`]} - ${recipeDetail[`strMeasure${i}`]}`
                )
            }
        }
        return ingredients;
    }
    const list = getIngredients();
    return (
        <div className="modal" tabIndex="-1" id='modal' data-bs-backdrop="static">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{strDrink}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => {
                                setRecipeId(null)
                                setRecipeDetail({})
                            }}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className='d-flex justify-content-center mb-3'>
                            <img className='img-fluid w-50' src={strDrinkThumb} alt="Recipe Image" />
                        </div>
                        <h6><strong>Instructions</strong></h6>
                        <p> {strInstructions}</p>
                        <h6><strong>Ingredients</strong></h6>
                        <ol>
                            {list.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
