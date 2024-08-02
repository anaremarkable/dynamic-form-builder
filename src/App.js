import React from 'react';
import { FormProvider } from './context/FormContext';
import FormBuilder from './components/FormBuilder';

function App() {
    return (
        <FormProvider>
            <div className="App">
                <h1>Dynamic Form Builder</h1>
                <FormBuilder />
            </div>
        </FormProvider>
    );
}

export default App;
