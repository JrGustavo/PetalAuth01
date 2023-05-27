
// eslint-disable-next-line no-unused-vars
import React, {useState} from  "react";
import {Link} from "react-router-dom"
import {RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine, RiShoppingCartLine, RiWhatsappLine, RiUserFollowLine } from "react-icons/ri";
import {toast} from "react-toastify";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [shop, setShop] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        if([number, shop, name,  email, password, confirmPassword].includes("")) {
            toast.error("Todos los campos son obligatorios", {
                theme: "dark"
            });
            return;
        }
        if(password.lengh < 5) {
            toast.error("El password debe contener al menos 5 caracteres", {
                theme: "dark"
            });
            return;
        }

        if(password !==  confirmPassword) {
            toast.error("Las contraseñas no son iguales",{
                theme: "dark",
            });
            return;
        }

        // Validar que el Email no exista en la base de datos

        // Enviar un correo de verficación o un Número de OTP al WhatsApp

        console.log("Toda la funcionalidad del registro");
    };
    return (
        <div className="bg-white p-8 rounded-lg w-full md:w-[500]">
            <div className="mb-10">
                <h1 className="text-3xl  font-bold  text-center">
                    Crear cuenta
                </h1>
            </div>
            <form onSubmit={handleSubmit} className="flex-col gap-4 mb-6">
                <div className="relative">
                    <RiShoppingCartLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        className="w-full border border-gray-200 outline-none  py-2 px-8 rounded-lg"
                        placeholder="Nombre del comercio"
                        value={shop}
                        onChange={(e) => setShop(e.target.value)}
                    />
                </div>
                <div className="relative">
                    <RiWhatsappLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="number"
                        className="w-full border border-gray-200 outline-none  py-2 px-8 rounded-lg"
                        placeholder="Número de WhatsApp"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>
                <div className="relative">
                    <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        className="w-full border border-gray-200 outline-none  py-2 px-8 rounded-lg"
                        placeholder="Correo electrónico "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="relative">
                    <RiUserFollowLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        className="w-full border border-gray-200 outline-none  py-2 px-8 rounded-lg"
                        placeholder="Nombre del responsable"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="relative">
                    <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type={ showPassword ? "text" : "password"}
                        className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
                        placeholder="Contraseña"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {showPassword ? (
                        <RiEyeOffLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />

                    ) : (
                        <RiEyeLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
                    )}
                </div>
                <div className="relative">
                    <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type={ showPassword ? "text" : "password"}
                        className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
                        placeholder="Confirmar contraseña "
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {showPassword ? (
                        <RiEyeOffLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />

                    ) : (
                        <RiEyeLine onClick={handleShowPassword} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer" />
                    )}
                </div>
                <div className="text-right">
                    <Link to="olvide-password" className="text-gray-500 hover:text-sky-600 hover: underline transition-colors">Política de tratamiento de datos</Link>
                </div>
                <div>
                    <button className="mt-6 bg-sky-600 text-white w-full py-2 px-6 rounded-lg hover:bg-sky-800 transition-colors"> Crear cuenta</button>
                </div>
            </form>
            <div className="flex items-center justify-between">
                <div>
                    ¿Ya tienes cuenta?<Link to="/" className="text-sky-600 font-medium hover:underline transition-all"> Ingresa </Link>
                </div>
                <div>
                 <Link to="/olvide-password" className="text-sky-600 font-medium hover:underline transition-all">Olvide mi contraseña</Link>
                </div>
            </div>
        </div>
    );
};

export default  Register;
