import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'
import { Modal } from './Modal';

export const Recipe = ({ recipe }) => {
    const { setRecipeId } = useContext(ModalContext);
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className="card">
                <img className='card-img-top' src={recipe.strDrinkThumb} alt={recipe.strDrink} />
                <div className="card-body">
                    <h5 className="card-title text-center">{recipe.strDrink}</h5>
                    <button
                        type='button'
                        className='btn btn-dark w-100'
                        data-bs-toggle='modal'
                        data-bs-target='#modal'
                        onClick={() => { setRecipeId(recipe.idDrink) }}
                    >More</button>
                    <Modal />
                </div>
            </div>
        </div>
    )
}
