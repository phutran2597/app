import React, { useState, useCallback } from 'react';
import ButtonStyle01 from '../../components/ButtonStyle01';
import InputBox from '../../components/InputBox';

const LoginPage = () => {
    const [formInput, setFormInput] = useState({});
    const dataInput = [
        {
            type: "inputText",
            name: "username",
            required: true,
            id: "username",
            label: "Username"
        },
        {
            type: "password",
            name: "password",
            required: true,
            id: "password",
            label: "Password"         
        },
    ];
    
    const handleInputChange = (name, value) => {
        setFormInput(
            {               
                ...formInput, 
                [name]: value
            }
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formInput);
    }

    return (
        <div className="flex h-screen items-center px-4">
            <div className="w-96 max-w-full mx-auto border">
                <h1 className="logo mb-7"><a href=""><img className="mx-auto" src="../assets/images/logo.png" alt=""/></a></h1>
                <div className="px-4 pb-10">
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-6'>       
                        {
                            dataInput.map(dataItem => (
                                <InputBox key={dataItem.id} onChange={handleInputChange} data={dataItem} />    
                            ))
                        } 
                        <ButtonStyle01 text="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage