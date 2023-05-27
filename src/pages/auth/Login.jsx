
// eslint-disable-next-line no-unused-vars
import React from "react";
import {RiMailLine, RiLockLine } from "react-icons/ri";
const Login = () => {
    return (
        <div className="bg-white p-8 rounded-lg">
            <div className="mb-10">
                <h1 className="text-3xl  font-bold ">Iniciar sesión</h1>
            </div>
        <form>
            <div className="relative">
                <RiMailLine className="absolute left-0 top-0 text-gray-500"/>
                <input
                    type="email"
                    className="w-full border border-gray-200 outline-none py-2 px-4 rounded-lg"
                    placeholder="Correo eletrónico"
                />
            </div>
        </form>
        </div>
    );
};

export default  Login;
