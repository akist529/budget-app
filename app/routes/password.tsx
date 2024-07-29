import { useNavigate, useOutletContext } from "@remix-run/react";
import { useState, useMemo, useCallback } from "react";
import { AiFillBank } from "@icons/ai";
import axios from "axios";
import AppContextType from "@customTypes/AppContextType";

export default function Password() {
    const AppContext = useOutletContext();
    const { setToken } = AppContext as AppContextType;
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const validateEmail = useCallback(() => {
        return email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
    }, [email]);

    const sendData = useCallback(() => {
        axios.post('http://localhost:5173/api/forgot-password', { email })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }, [email]);

    const checkForm = useCallback((e: any) => {
        e.preventDefault();

        if (!email) {
            setError("This field is required");
        } else if (!validateEmail()) {
            setError("Invalid email input");
        } else {
            setError("");
        }

        if (!error) {
            sendData();
        }
    }, [sendData]);

    return (
        <div id="password" className="w-full min-h-[calc(100vh-64px)] dark:bg-violet-950/25 dark:text-white flex flex-col justify-start items-center">
            <div className="flex flex-col justify-center items-center gap-3 py-12">
                <AiFillBank className="size-12 icon-purple-500" />
                <h2 className="text-2xl font-bold">Reset your password</h2>
            </div>
            <form className="grid grid-rows-[auto_auto] gap-8">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <label htmlFor="email" className="font-semibold text-sm">Email address</label>
                        { error && <span className="text-sm text-red-400 font-bold">{ error }</span> }
                    </div>
                    <input
                        id="email" name="email" type="email"
                        className="outline outline-1 outline-neutral-300 dark:outline-neutral-600 focus:outline-2 focus:outline-purple-500 h-8 rounded-md dark:bg-gray-700 w-72 sm:w-80 md:w-96"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <button className="bg-purple-500 hover:bg-purple-400 px-6 py-2 rounded-lg font-bold text-white text-sm" onClick={e => checkForm(e)}>Reset password</button>
            </form>
        </div>
    );
}