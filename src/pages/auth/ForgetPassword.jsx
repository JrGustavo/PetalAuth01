
// eslint-disable-next-line no-unused-vars
import React, {useState} from  "react";
import {Link} from "react-router-dom"
import {RiMailLine } from "react-icons/ri";
import {toast} from "react-toastify";

const ForgetPassword = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if([email].includes("")) {
            toast.error("El correo debe ser obligatorio", {
                theme: "dark"
            });
            return;
        }

        //Verificar que el email exista
        // Enviar el Email de recuperación de contraseña
        console.log("Toda la funcionaliad de recuperar password");
        toast.success("Se han enviado las instrucciones al correo registrado", {
            theme: "dark"
        });
    };
    return (
        <div className="bg-white p-8 rounded-lg w-full md:w-96">
            <div className="mb-10">
                <h1 className="text-3xl  font-bold  text-center">
                    Recuperar  mi contraseña
                </h1>
            </div>
            <form onSubmit={handleSubmit} className="flex-col gap-4 mb-6">
                <div className="relative">
                    <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="email"
                        className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <button className="mt-6 bg-sky-600 text-white w-full py-2 px-6 rounded-lg hover:bg-sky-800 transition-colors">Enviar correo de recuperación</button>
                </div>
            </form>
            <div className="flex items-center justify-between">
                <div>
                    ¿Ya tienes cuenta? {" "}
                    <Link to="/" className="text-sky-600 font-medium hover:underline transition-all"> Ingresa </Link>
                </div>
                <div>
                    <Link to="/registro" className="text-sky-600 font-medium hover:underline transition-all">Crea tu cuenta aquí</Link>
                </div>
            </div>
        </div>
    );
};

export default  ForgetPassword;

