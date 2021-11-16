import React from 'react';

const TextArea = ({name, age, gender, country}) => {
    return (
        <div className="text-area shadow redounded">
            <h3>
                {`Hola ${name}, creo que tienes ${age} años, vives en ${country} y
                tu genero es ${gender}.`}
            </h3>
        </div>
    );
};

export default TextArea;