import React from 'react'

export const Recipe = ({ recipe }) => {
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className="card">
                <img className='card-img-top' src={recipe.strDrinkThumb} alt={recipe.strDrink} />
                <div className="card-body">
                    <h5 className="card-title text-center">{recipe.strDrink}</h5>
                    <a className='btn btn-dark w-100' href="/" target="_blank" rel="noopener noreferrer">More</a>
                </div>
            </div>
        </div>
    )
}
