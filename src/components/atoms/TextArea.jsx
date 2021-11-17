import React from 'react';

const TextArea = ({name, age, gender, country}) => {

    const genderTranslated = gender === 'male' ? 'masculino' : 'femenino'
 
    return (
        <div className="text-area shadow redounded">
            <h3>
                {
                    `Hola ${name}, creo que tienes ${age ? age : 1} años, vives en 
                    ${ country.map(item => item.country_id) } y
                    tu genero es ${genderTranslated}.`
                }
            </h3>
        </div>
    );
};

export default TextArea;