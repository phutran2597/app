import React, { useState } from 'react';

const LoginForm = () => {
    const [formInput, setFormInput] = useState({
        'username': '',
        'password': ''
    });
    
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

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
        <div className="flex h-screen items-center">
            <div className="w-1/4 max-w-full mx-auto">
                <h1 className="logo mb-7"><a href=""><img className="w-20 mx-auto" src="https://i.pinimg.com/originals/13/41/81/134181ddfde6e93da4da54cf919c533f.png" alt="" /></a></h1>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-6'>
                    <label htmlFor="username" className='block'>
                        <span className="text-gray-700">Username</span>
                        <input type="text" value={formInput.username} onChange={handleInputChange} name="username" id="username" className="mt-1 block w-full rounded-md border-gray-300 focus:border-sky-500" />
                    </label>
                    <label htmlFor="password" className='block'>
                        <span className="text-gray-700">Password</span>
                        <input type="password" value={formInput.password} onChange={handleInputChange} name="password" id="password" className="mt-1 block w-full rounded-md border-gray-300 focus:border-sky-500" />
                    </label>
                    <button className="flex border rounded justify-items-center w-40 h-10 items-center justify-center mx-auto bg-sky-500 text-white hover:text-sky-500 hover:bg-white hover:border-sky-500">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm