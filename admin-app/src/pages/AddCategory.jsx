import React from 'react'
import CustomInput from '../components/CustomInput'

const AddCategory = () => {
  return (
    <div>
        <h3 className="mb-4">Add Category</h3>
        <div>
            <form action="">
                <CustomInput type="text" label="Enter Category" />
                <button
            type="submit"
            className="btn btn-success border-0 rounded-3 my-5"
          >
            Add Category
          </button>
            </form>
        </div>
    </div>
  )
}

export default AddCategory