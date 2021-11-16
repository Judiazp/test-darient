import React from 'react';
import { useData } from '../../context';
import { useForm } from '../../hooks/useForm';
import { getApi } from '../../utils';

const Form = () => {
    
    const { data, setData } = useData()

    const [ formName, handleInputChange ] = useForm({
        userName: ''
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        
        setData({
            ...data,
            loading: true
        })

        const { age, nationality, gender } = await getApi( formName.userName )

        try {
            setData({
                name: formName.userName,
                age: age.age,
                nationality: nationality.country,
                gender: gender.gender,
                loading: false
            })
        } catch (error) {
            return '¡Oops! Ha ocurrido un error'
        }
    }

    return (
        <form
            className="w-50 d-flex"
            onSubmit={ handleSubmit }
        >
            <input 
                className="form-control m-3"
                type="text" 
                placeholder="Nombre"
                name="userName"
                onChange={ handleInputChange  }
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