import React from 'react';
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us On</h2>
         <div className="join join-vertical flex *:bg-base-100">
            <button className="btn join-item justify-start">
            <FaFacebook />
            Facebook</button>
            <button className="btn join-item justify-start">
            <FaInstagram />
            Facebook</button>
            <button className="btn join-item justify-start">
            <FaFacebook />
            Facebook</button>
            </div>
        </div>
    );
};

export default FindUs;