import React from 'react';
import './Form.css';

const Form = ({value, onChange, onKeyPress, onCreate, color}) => {
    console.log('form')
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{color}}/>
            <div className="create-button" onClick={onCreate}>
                add
            </div>
        </div>
    )
}

export default Form;