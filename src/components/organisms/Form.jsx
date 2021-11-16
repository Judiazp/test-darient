import React from 'react';

const Form = () => {
    return (
        <form
            className="w-50 d-flex"
        >
            <input 
                className="form-control m-3"
                type="text" 
                placeholder="Nombre"
            />
            <button 
                className="btn btn-primary m-3"
                type="submit"
            >
                Consultar
            </button>
        </form>
    );
};

export default Form;