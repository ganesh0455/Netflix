import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignUpForm, setIsSignUpForm] = useState(false);

    const handleChangeform = () => {
        setIsSignUpForm(!isSignUpForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img 
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
                    alt="backround-movies" 
                />
            </div>
            <form className="absolute w-3/12 my-36 mx-auto right-0 left-0 p-12 bg-black text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    {isSignUpForm ? "Sign Up" : "Sign In" }
                </h1>
                {isSignUpForm &&
                    <input 
                        className="p-4 my-4 w-full bg-gray-800"
                        type="text"
                        placeholder="User name"
                    />
                }
                <input 
                    className="p-4 my-4 w-full bg-gray-800"
                    type="text"
                    placeholder="Email Address"
                />
                <input 
                    className="p-4 my-4 w-full bg-gray-800"
                    type="password"
                    placeholder="Password"
                />
                <button 
                    className="p-4 my-6 bg-red-700 w-full rounded-lg"
                >
                    {isSignUpForm ? "Sign Up" : "Sign In"}
                </button>
                <p className="py-4 cursor-pointer" onClick={handleChangeform}>
                    {isSignUpForm 
                        ? "New to Netflix? Sign up now." 
                        : "Are you a Netflix user? Sign in now."
                    }
                </p>
            </form>
        </div>
    )
}

export default Login