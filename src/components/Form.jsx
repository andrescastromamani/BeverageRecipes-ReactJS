import React from 'react'

export const Form = () => {
    return (
        <form action="">
            <div className="row mt-3">
                <h2 className='text-center h5'>Search Beverage for category</h2>
                <div className="col-12 col-md-4 mb-3">
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input type="text" className='form-control' name='name' />
                </div>
                <div className="col-12 col-md-4 mb-3">
                    <label htmlFor="category" className='form-label'>Category</label>
                    <select name="category" id="category" className='form-select'>
                        <option value="">Select a Category</option>
                    </select>
                </div>
                <div className="col-12 col-md-4 mb-3 d-flex align-items-end">
                    <input type="submit" className='btn btn-dark w-100' />
                </div>
            </div>
        </form>
    )
}
