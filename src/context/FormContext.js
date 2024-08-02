import React, { createContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
    const [fields, setFields] = useState([]);

    const addField = (field) => {
        setFields([...fields, field]);
    };

    const removeField = (index) => {
        setFields(fields.filter((_, i) => i !== index));
    };

    return (
        <FormContext.Provider value={{ fields, addField, removeField }}>
            {children}
        </FormContext.Provider>
    );
};

export { FormContext, FormProvider };
