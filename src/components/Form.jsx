import React, { useContext, useState } from 'react'
import { CategoryContext } from '../context/CategoryContext'
import { RecipeContext } from '../context/RecipeContext';

export const Form = () => {
    const { categories } = useContext(CategoryContext);
    const { setData } = useContext(RecipeContext);
    const [beverage, setBeverage] = useState({
        name: '',
        category: ''
    });
    const handleChange = (e) => {
        setBeverage({
            ...beverage,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setData(beverage)
    }
    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className="row mt-3">
                <div className="col-12 col-md-4 mb-3">
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input
                        type="text"
                        className='form-control'
                        name='name'
                        onChange={handleChange}
                    />
                </div>
                <div className="col-12 col-md-4 mb-3">
                    <label htmlFor="category" className='form-label'>Category</label>
                    <select
                        name="category"
                        id="category"
                        className='form-select'
                        onChange={handleChange}
                    >
                        <option value="">Select a Category</option>
                        {
                            categories.map((category) => (
                                <option
                                    key={category.strCategory}
                                    value={category.strCategory}
                                >
                                    {category.strCategory}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-12 col-md-4 mb-3 d-flex align-items-end">
                    <input type="submit" className='btn btn-dark w-100' />
                </div>
            </div>
        </form>
    )
}
