import { MetaFunction, NavLink, useNavigate } from "@remix-run/react";
import { useState, useCallback, useMemo } from "react";
import { AiFillBank } from "@icons/ai";
import { BiShow, BiHide } from "@icons/bi";
import axios from 'axios';
import ErrorState from "@customTypes/ErrorState";

export const meta: MetaFunction = () => {
    return [{ title: "Sign up - Budget" }];
};

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState(new Object as ErrorState);
    const navigate = useNavigate();

    const body = useMemo(() => {
        return {
            'name': (firstName && lastName) ? `${firstName} ${lastName}` : (firstName ? firstName : lastName),
            email,
            password,
            'password_confirmation': passwordConfirmation
        };
    }, [firstName, lastName, email, password, passwordConfirmation]);

    const sendData = useCallback(() => {
        axios.post('http://localhost:5173/api/signup', body)
        .then(res => {
            console.log(res);
            sessionStorage.setItem('token', res.data.data.token);
            navigate("/");
        })
        .catch(err => {
            console.log(err);
        });
    }, [body]);

    const validateEmail = useCallback(() => {
        return email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      }, [email]);

    const checkForm = useCallback((e: any) => {
        e.preventDefault();

        if (!email) {
            setError(prevState => {
                return {
                    ...prevState,
                    email: "This field is required"
                };
            });
        } else if (!validateEmail()) {
            setError(prevState => {
                return {
                    ...prevState,
                    email: "Invalid email input"
                }
            })
        } else {
            setError(prevState => {
                return {
                    ...prevState,
                    email: ""
                };
            });
        }

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

    return (
        <div id="signup" className="w-full min-h-[calc(100vh-64px)] dark:bg-violet-950/25 dark:text-white flex flex-col justify-start items-center">
            <div className="flex flex-col justify-center items-center gap-3 py-12">
                <AiFillBank className="size-12 icon-purple-500" />
                <h2 className="text-2xl font-bold">Sign up for Budget</h2>
            </div>
            <form className="grid grid-rows-[auto_auto_auto_auto_auto_auto] gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="first_name" className="font-semibold text-sm">First name</label>
                        <input 
                            id="first_name" name="last_name" type="text"
                            className="outline outline-1 outline-neutral-300 dark:outline-neutral-600 focus:outline-2 focus:outline-purple-500 h-8 rounded-md dark:bg-gray-700"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="last_name" className="font-semibold text-sm">Last name</label>
                        <input
                            id="last_name" name="last_name" type="text"
                            className="outline outline-1 outline-neutral-300 dark:outline-neutral-600 focus:outline-2 focus:outline-purple-500 h-8 rounded-md dark:bg-gray-700"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <label htmlFor="email" className="font-semibold text-sm">Email address *</label>
                        { error.email && <span className="text-sm text-red-400 font-bold">{ error.email }</span> }
                    </div>
                    <input
                        id="email" name="email" type="email"
                        className="outline outline-1 outline-neutral-300 dark:outline-neutral-600 focus:outline-2 focus:outline-purple-500 h-8 rounded-md dark:bg-gray-700 w-72 sm:w-auto"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <label htmlFor="password" className="font-semibold text-sm">Password *</label>
                        { error.password && <span className="text-sm text-red-400 font-bold">{ error.password }</span> }
                    </div>
                    <div className="flex justify-center items-center px-2 gap-3 outline outline-1 outline-neutral-300 dark:outline-neutral-600 focus-within:outline-2 focus-within:outline-purple-500 rounded-md dark:bg-gray-700">
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
                        <label htmlFor="confirm_password" className="font-semibold text-sm">Confirm password *</label>
                        { error.passwordConfirmation && <span className="text-sm text-red-400 font-bold">{ error.passwordConfirmation }</span> }
                    </div>
                    <input
                        id="confirm_password" name="confirm_password" type={hidePassword ? 'password' : 'text'}
                        className="outline outline-1 outline-neutral-300 dark:outline-neutral-600 focus:outline-2 focus:outline-purple-500 h-8 rounded-md dark:bg-gray-700 w-72 sm:w-auto"
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                </div>
                <button className="bg-purple-500 hover:bg-purple-400 px-6 py-2 rounded-lg font-bold text-white text-sm" onClick={e => checkForm(e)}>Sign up</button>
                <p className="text-center">Already have an account? <NavLink to="/login" className="font-bold text-purple-500 hover:text-purple-400">Log in</NavLink></p>
            </form>
        </div>
    );
}