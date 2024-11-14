import React from 'react';
import { FcGoogle   } from "react-icons/fc";
import { FaSquareGithub } from "react-icons/fa6";
const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="*:w-full space-y-2">
                <button className="btn"><FcGoogle />Login with Google</button>
                <button className="btn"><FaSquareGithub />Login with GitHub </button>

            </div>
        </div>
    );
};

export default SocialLogin;