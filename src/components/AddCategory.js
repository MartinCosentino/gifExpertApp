import React, { useState } from 'react';
import PropTypes from 'prop-types'


export const AddCategory = ({ setcategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            // console.log('Submit DONE');
            setcategory(category => [inputValue, ...category]);

            setInputValue('');
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Search..."
                    value={inputValue}
                    onChange={handleInputChange}
                />

            </form>
        </>
    )
}

AddCategory.propTypes = {

    setcategory: PropTypes.func.isRequired

}
