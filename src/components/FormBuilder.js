import React, { useContext, useState } from 'react';
import { FormContext } from '../context/FormContext';
import FormField from './FormField';
import './FormBuilder.css';

const FormBuilder = () => {
    const { fields, addField, removeField } = useContext(FormContext);
    const [newField, setNewField] = useState({ type: 'text', label: '', options: [] });
    const [formData, setFormData] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleAddField = () => {
        addField(newField);
        setNewField({ type: 'text', label: '', options: [] });
    };

    const handleChange = (index, value) => {
        setFormData({ ...formData, [index]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation and form submission
        console.log('Form Data:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Hide the confirmation message after 3 seconds
    };

    return (
        <form className="form-builder" onSubmit={handleSubmit}>
            <h2>Dynamic Form Builder</h2>
            <div className="field-creator">
                <select
                    value={newField.type}
                    onChange={(e) => setNewField({ ...newField, type: e.target.value })}
                >
                    <option value="text">Text</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="select">Select</option>
                </select>
                <input
                    type="text"
                    placeholder="Label"
                    value={newField.label}
                    onChange={(e) => setNewField({ ...newField, label: e.target.value })}
                />
                {newField.type === 'select' && (
                    <input
                        type="text"
                        placeholder="Options (comma separated)"
                        value={newField.options.join(',')}
                        onChange={(e) => setNewField({ ...newField, options: e.target.value.split(',') })}
                    />
                )}
                <button type="button" onClick={handleAddField}>Add Field</button>
            </div>
            <div>
                {fields.map((field, index) => (
                    <FormField
                        key={index}
                        field={field}
                        index={index}
                        removeField={removeField}
                        handleChange={handleChange}
                    />
                ))}
            </div>
            <button type="submit" className="submit-button">Submit</button>
            {submitted && <p className="confirmation-message">Form submitted successfully!</p>}
        </form>
    );
};

export default FormBuilder;
