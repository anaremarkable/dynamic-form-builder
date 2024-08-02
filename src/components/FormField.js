import React from 'react';
import './FormBuilder.css';

const FormField = ({ field, index, removeField, handleChange }) => {
    return (
        <div className="form-field">
            {field.type === 'text' && (
                <input
                    type="text"
                    placeholder={field.label}
                    onChange={(e) => handleChange(index, e.target.value)}
                />
            )}
            {field.type === 'checkbox' && (
                <label>
                    <input
                        type="checkbox"
                        onChange={(e) => handleChange(index, e.target.checked)}
                    />{' '}
                    {field.label}
                </label>
            )}
            {field.type === 'select' && (
                <select onChange={(e) => handleChange(index, e.target.value)}>
                    {field.options.map((option, i) => (
                        <option key={i} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            )}
            <button type="button" onClick={() => removeField(index)}>Remove</button>
        </div>
    );
};

export default FormField;
