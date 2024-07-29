import { MetaFunction, useNavigate, useSearchParams } from "@remix-run/react";
import { useState, useEffect, useMemo, useCallback } from "react";
import { AiFillBank } from "@icons/ai";
import { BiShow, BiHide } from "@icons/bi";
import ErrorState from "@customTypes/ErrorState";
import axios from "axios";

export const meta: MetaFunction = () => {
    return [{ title: "Reset Password - Budget" }];
};

export default function ResetPassword() {
    const [error, setError] = useState(new Object as ErrorState);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get('token');

    const body = useMemo(() => {
        return {
            email,
            password,
            'password_confirmation': passwordConfirmation,
            token
        };
    }, [email, password]);

    const validateEmail = useCallback(() => {
        return email
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }, [email]);

    const sendData = useCallback(() => {
        axios.post('http://localhost:5173/api/reset-password', body)
        .then(res => {
            console.log(res);
            navigate("/login");
        })
        .catch(err => {
            console.log(err);
        });
    }, [body]);

    const checkForm = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(passwordConfirmation);

        if (!password) {
            setError(prevState => {
                return {
                    ...prevState,
                    password: "This field is required"
                };
            });
        } else {
            setError(prevState => {
                return {
                    ...prevState,
                    password: ""
                };
            });
        }

        if (!passwordConfirmation) {
            setError(prevState => {
                return {
                    ...prevState,
                    passwordConfirmation: "This field is required"
                };
            });
        } else {
            setError(prevState => {
                return {
                    ...prevState,
                    passwordConfirmation: ""
                };
            });
        }

        if (Object.keys(error).length === 0) {
            sendData();
        }
    }, [sendData]);

    const setPasswordState = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setHidePassword(prevState => !prevState);
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5173/api/get-email', { params: { token }})
            .then(res => {
                console.log(res);
                setEmail(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div id="reset-password" className="w-full min-h-[calc(100vh-64px)] dark:bg-violet-950/25 dark:text-white flex flex-col justify-start items-center">
            <div className="flex flex-col justify-center items-center gap-3 py-12">
                <AiFillBank className="size-12 icon-purple-500" />
                <h2 className="text-2xl font-bold">Reset account password</h2>
            </div>
            <form className="grid grid-rows-[auto_auto_auto] gap-8">
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <label htmlFor="password" className="font-semibold text-sm">New Password</label>
                        { error.password && <span className="text-sm text-red-400 font-bold">{ error.password }</span> }
                    </div>
                    <div className="flex justify-center items-center px-2 gap-3 w-72 outline outline-1 outline-neutral-300 dark:outline-neutral-600 focus-within:outline-2 focus-within:outline-purple-500 rounded-md dark:bg-gray-700 sm:w-80 md:w-96">
                        <input
                            id="password" name="password" type={hidePassword ? 'password' : 'text'}
                            className="h-8 w-full bg-transparent focus:outline-none"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button onClick={setPasswordState}>
                            { hidePassword ? 
                                <BiShow className="icon-purple-500" /> : 
                                <BiHide className="icon-purple-500" />
                            }
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <label htmlFor="confirm_password" className="font-semibold text-sm">Confirm new password</label>
                        { error.passwordConfirmation && <span className="text-sm text-red-400 font-bold">{ error.passwordConfirmation }</span> }
                    </div>
                    <input
                        id="confirm_password" name="confirm_password" type={hidePassword ? 'password' : 'text'}
                        className="outline outline-1 outline-neutral-300 dark:outline-neutral-600 focus:outline-2 focus:outline-purple-500 h-8 rounded-md dark:bg-gray-700 w-72 sm:w-auto"
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                </div>
                <button className="bg-purple-500 hover:bg-purple-400 px-6 py-2 rounded-lg font-bold text-white text-sm" onClick={e => checkForm(e)}>Set new password</button>
            </form>
        </div>
    );
}