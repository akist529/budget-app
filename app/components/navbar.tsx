import { NavLink, useNavigate } from "@remix-run/react";
import { useState, useEffect, useCallback, useContext } from "react";
import { AiFillBank } from "@icons/ai";
import { SlMenu } from "@icons/sl";
import { BiLogIn, BiLogOut } from "@icons/bi";
import { MdOutlineLightMode, MdOutlineDarkMode, MdAccountBox, MdAccountCircle } from "@icons/md";
import { AppContext } from "@contexts/AppContext";
import AppContextType from "@customTypes/AppContextType";

export default function Navbar() {
    const appContext = useContext(AppContext);
    const { token, setToken, displayDarkMenu, setDisplayDarkMenu, useDarkModeSystem, darkModeSystem, darkModeSetting, setDisplayDrawer } = appContext as AppContextType;
    const navigate = useNavigate();

    const logOut = useCallback(() => {
        if (typeof window !== "undefined") {
            sessionStorage.removeItem('token');
            setToken("");
            navigate("/");
        }
    }, []);

    return (
        <header className="grid grid-cols-2 lg:grid-cols-3 content-center px-5 sm:px-10 dark:bg-violet-950/25 border-b border-gray-900 h-16">
            <div className="flex-1 flex justify-start items-center gap-5">
                <NavLink
                    to="/"
                    className="flex items-center gap-1 dark:text-white text-3xl font-bold"
                >
                    <AiFillBank className="flex-initial size-8 icon-purple-500" />
                    budget
                </NavLink>
                <button
                    className={ displayDarkMenu ? 
                        "hidden lg:block bg-slate-200 dark:bg-indigo-950 rounded-full p-1" : 
                        "hidden lg:block hover:bg-slate-100 dark:hover:bg-indigo-950 rounded-full p-1" }
                    onClick={() => setDisplayDarkMenu((prevState: any) => !prevState)}
                >
                    {
                        (useDarkModeSystem && darkModeSystem) || (!useDarkModeSystem && darkModeSetting) ? 
                            <MdOutlineDarkMode className="size-8 icon-black dark:icon-white" /> : 
                            <MdOutlineLightMode className="size-8 icon-black dark:icon-white" /> 
                    }
                </button>
            </div>
            <nav className="flex-1 hidden lg:flex justify-between items-center text-md dark:text-white">
                <ul className="flex-1 justify-center items-center hidden lg:flex">
                    <li className="flex flex-initial justify-center hover:bg-slate-100 dark:hover:bg-indigo-950 active:bg-slate-200 rounded-3xl">
                        <NavLink
                            to="/"
                            className="px-3 py-2"
                        >Home</NavLink>
                    </li>
                    <li className="flex flex-initial justify-center hover:bg-slate-100 dark:hover:bg-indigo-950 active:bg-slate-200 rounded-3xl">
                        <NavLink
                            to="/budgets"
                            className="px-3 py-2"
                        >Budgets</NavLink>
                    </li>
                    <li className="flex flex-initial justify-center hover:bg-slate-100 dark:hover:bg-indigo-950 active:bg-slate-200 rounded-3xl">
                        <NavLink
                            to="/expenses"
                            className="px-3 py-2"
                        >Expenses</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="flex-1 lg:flex justify-end items-center gap-5 hidden dark:text-white text-sm">
                { token ? 
                    <button
                        onClick={logOut}
                        className="flex justify-end items-center hover:bg-slate-100 dark:hover:bg-indigo-950 active:bg-slate-200 rounded-3xl px-5 py-2"
                    >
                        Log out
                        <BiLogOut className="size-6 icon-black dark:icon-white" />
                    </button> : 
                    <NavLink
                        to="/login"
                        className="flex justify-end items-center hover:bg-slate-100 dark:hover:bg-indigo-950 active:bg-slate-200 rounded-3xl px-5 py-2"
                    >
                        Log in
                        <BiLogIn className="size-6 icon-black dark:icon-white" />
                    </NavLink>
                }
                { token ? 
                    <NavLink
                        to="/profile"
                        className="bg-purple-500 text-white rounded-full flex items-center hover:bg-purple-400 p-2"
                    >
                        <MdAccountCircle className="size-6 icon-white" />
                    </NavLink> : 
                    <NavLink
                        to="/signup"
                        className="bg-purple-500 text-white rounded-3xl flex items-center gap-1 hover:bg-purple-400 px-5 py-2"
                    >
                        Sign up
                        <MdAccountBox className="size-6 icon-white" />
                    </NavLink>
                }
            </div>
            <button className="flex justify-end items-center" onClick={() => setDisplayDrawer(true)}>
                <SlMenu className="flex-initial lg:hidden size-8 lg:size-32 icon-purple-500" />
            </button>
        </header>
    );
}