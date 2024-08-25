import  { useState } from 'react';
import * as apiClient from "../ClientAplis/Api";
import { useMutation } from "react-query";

function SignIn() {
    const [registerForm, setRegisterForm] = useState({
        username: '',
        email: '',
        fullName: '',
        avatar: null,
        converImage: null,
        password: ''
    });
    const mutation = useMutation(apiClient.Register, {
        onSuccess: async () => {
            console.warn("USER REGISTERED SUCCESSFULLY");
        },
        onError: (error) => {
            console.error("Error:", error);
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        mutation.mutate(registerForm)

    };
    return (
        <div className='bg-blue-700 h-screen text-black pt-32 pl-40 flex-col  justify-center'>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <h1 className='text-white font-extrabold text-5xl'>REGISTER PAGE</h1>
                <div className="flex">
                    <input
                        className='rounded ml-2 p-2'
                        type="text"
                        name="username"
                        value={registerForm.username}
                        onChange={(event) => setRegisterForm(prevForm => ({
                            ...prevForm,
                            username: event.target.value
                        }))}
                        placeholder='Username'
                    />
                </div>
                <div className="flex">
                    <input
                        className='rounded ml-2 p-2'
                        type="text"
                        name="email"
                        value={registerForm.email}
                        onChange={(event) => setRegisterForm(prevForm => ({
                            ...prevForm,
                            email: event.target.value
                        }))}
                        placeholder='email'
                    />
                </div>
                <div className="flex">
                    <input
                        className='rounded ml-2 p-2'
                        type="text"
                        name="fullName"
                        value={registerForm.fullName}
                        onChange={(event) => setRegisterForm(prevForm => ({
                            ...prevForm,
                            fullName: event.target.value
                        }))}
                        placeholder='Full Name'
                    />
                </div>
                <div className="flex">
                    {/* <input 
                        className='rounded ml-2 p-2'
                        type="file"
                        name="avatar"
                        onChange={(event) => setRegisterForm(prevForm => ({
                            ...prevForm,
                            avatar: event.target.value
                        }))}
                    /> */}

                    <input
                        className='rounded ml-2 p-2'
                        type="file"
                        name="avatar"
                        onChange={(event) => setRegisterForm(prevForm => ({
                            ...prevForm,
                            avatar: event.target.files[0]
                        }))}
                    />
                </div>
                <div className="flex">
                    {/* <input
                        className='rounded ml-2 p-2'
                        type="file"
                        name="converImage"
                        onChange={(event) => setRegisterForm(prevForm => ({
                            ...prevForm,
                            converImage: event.target.value
                        }))}
                    /> */}
                    <input
                        className='rounded ml-2 p-2'
                        type="file"
                        name="converImage"
                        onChange={(event) => setRegisterForm(prevForm => ({
                            ...prevForm,
                            converImage: event.target.files[0]
                        }))}
                    />
                </div>
                <div className="flex">
                    <input
                        className='rounded ml-2 p-2'
                        type="password"
                        name="password"
                        value={registerForm.password}
                        onChange={(event) => setRegisterForm(prevForm => ({
                            ...prevForm,
                            password: event.target.value
                        }))}
                        placeholder='password'
                    />
                </div>
                <div className="flex w-44">
                    <button
                        type="submit"
                        className='rounded bg-green-500 text-center p-2 w-full'>
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
