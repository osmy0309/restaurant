import { useState } from "react";
import TextField from "../form/TextField";

function FormLogin({login=true}) {
    const onSubmit = async (ev: any) => {
        ev.preventDefault();
        console.log("Enviar datos :",email,password);
     };
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <>
            <div className="flex flex-col items-center justify-center bg-white z-10">
                <div className="flex space-x-4 justify-items-center items-center   pb-[1rem]">
                    <p className="font-Sail_Regular text-[40px] flex text-[#1F0B01] ">{login ? 'Bienvenido':'Crea una cuenta'}</p>
                </div>

                <div className="w-100 min-h-[100px]">
                    <form onSubmit={onSubmit} className="w-100 flex flex-col gap-[1rem] pb-[1rem] items-center">
                        <TextField name="email" placeholder="pepe.perez@correo.com" label="Correo" type="email" value={email} onChange={(value) => setEmail(value)} />
                        <TextField
                            name="password"
                            placeholder="Contraseña"
                            label="Contraseña"
                            type="password"
                            value={password}
                            onChange={(value) => setPassword(value)}
                        />
                        
                        <button
                            type="submit"
                            className=" w-100 rounded-[5px] flex justify-center items-center bg-[#E38A5D] h-[3rem] p-2 px-8 tracking-[5%] leading-[16px]  hover:cursor-pointer hover:bg-[#e4743c] transition-colors duration-300"
                        >
                            {" "}
                            <p className="text-white text-[16px] font-bold font-Roboto">{login ? 'Entrar' : 'Registrarme'}</p>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default FormLogin;
