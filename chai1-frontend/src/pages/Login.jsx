import  { useState } from 'react';
import * as apiClient from "../ClientAplis/Api";
import { useMutation} from "react-query";
import { useNavigate } from 'react-router-dom';

// import  useContextProvider  from '../ContextApi/SingnInContext';
function Login() {
    const [loginForm, setLoginForm ] = useState({
        email : '',
        password: ''
    });
    // const {setState} = useContextProvider()
    const navigate = useNavigate()

    const mutation = useMutation(apiClient.login, {
        onSuccess: async () => {
            console.log("USER LOGGEDIN SUCCESSFULLY");
            console.warn({ message: "User has been signed in", type: "SUCCESS" });
            navigate("/")
        },
        onError: (error) => {
            console.error("Request Error:", error.message);

            console.log("mutation Error:", error);
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault(); 
        mutation.mutate(loginForm)

    };
    return (
        <div className='bg-blue-700 h-screen text-black pt-32 pl-40 flex-col  justify-center'>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <h1 className='text-white font-extrabold text-5xl'>LOGIN PAGE</h1>
                <div className="flex">
                    <input
                        className='rounded ml-2 p-2'
                        type="text"
                        name="email"
                        value={loginForm.email}
                        onChange={(event) =>setLoginForm (prevForm => ({
                            ...prevForm,
                            email: event.target.value
                        }))}
                        placeholder='email'
                    />
                </div>
                <div className="flex">
                    <input
                        className='rounded ml-2 p-2'
                        type="password"
                        name="password"
                        value={loginForm.password}
                        onChange={(event) =>setLoginForm (prevForm => ({
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

export default Login;
