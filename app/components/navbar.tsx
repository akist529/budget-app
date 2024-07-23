import { NavLink } from "@remix-run/react";
import { AiFillBank } from "@icons/ai";
import { SlMenu } from "@icons/sl";
import { BiLogIn } from "@icons/bi";
import { MdOutlineLightMode, MdOutlineDarkMode, MdAccountBox } from "@icons/md";

export default function Navbar(props: any) {
    const { setDisplayDrawer, darkModeSystem, useDarkModeSystem, setUseDarkModeSystem, darkModeSetting, setDarkModeSetting, displayDarkMenu, setDisplayDarkMenu } = props;

    return (
        <header className="grid grid-cols-2 lg:grid-cols-3 px-5 py-5 sm:px-10 dark:bg-violet-950/25 border-b border-gray-900">
            <div className="flex-1 flex justify-start items-center gap-5">
                <NavLink
                    to="/"
                    className="flex items-center gap-1 dark:text-white text-4xl font-bold"
                >
                    <AiFillBank className="flex-initial size-12 icon-violet-500" />
                    BUDGET
                </NavLink>
                <button
                    className={ displayDarkMenu ? 
                        "hidden lg:block bg-slate-200 dark:bg-indigo-950 rounded-full p-1" : 
                        "hidden lg:block hover:bg-slate-100 dark:hover:bg-indigo-950 rounded-full p-1" }
                    onClick={() => setDisplayDarkMenu((prevState: any) => !prevState)}
                >
                    {
                        (useDarkModeSystem && darkModeSystem) || (!useDarkModeSystem && darkModeSetting) ? 
                            <MdOutlineDarkMode className="size-12 icon-black dark:icon-white" /> : 
                            <MdOutlineLightMode className="size-12 icon-black dark:icon-white" /> 
                    }
                </button>
            </div>
            <nav className="flex-1 hidden lg:flex justify-between items-center text-xl dark:text-white">
                <ul className="flex-1 justify-center items-center hidden lg:flex">
                    <li className="flex flex-initial justify-center hover:bg-slate-100 dark:hover:bg-indigo-950 active:bg-slate-200 rounded-3xl">
                        <NavLink
                            to="/"
                            className="px-5 py-2"
                        >Home</NavLink>
                    </li>
                    <li className="flex flex-initial justify-center hover:bg-slate-100 dark:hover:bg-indigo-950 active:bg-slate-200 rounded-3xl">
                        <NavLink
                            to="/budgets"
                            className="px-5 py-2"
                        >Budgets</NavLink>
                    </li>
                    <li className="flex flex-initial justify-center hover:bg-slate-100 dark:hover:bg-indigo-950 active:bg-slate-200 rounded-3xl">
                        <NavLink
                            to="/expenses"
                            className="px-5 py-2"
                        >Expenses</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="flex-1 lg:flex justify-end items-center gap-5 hidden dark:text-white">
                <NavLink
                    to="/login"
                    className="flex justify-end items-center hover:bg-slate-100 dark:hover:bg-indigo-950 active:bg-slate-200 rounded-3xl px-5 py-2"
                >
                    Log in
                    <BiLogIn className="size-6 icon-black dark:icon-white" />
                </NavLink>
                <NavLink
                    to="/signup"
                    className="bg-violet-500 text-white rounded-3xl flex items-center gap-1 hover:bg-violet-400 px-5 py-2"
                >
                    Sign up
                    <MdAccountBox className="size-6 icon-white" />
                </NavLink>
            </div>
            <button className="flex justify-end items-center" onClick={() => setDisplayDrawer(true)}>
                <SlMenu className="flex-initial lg:hidden size-8 lg:size-32 icon-violet-500" />
            </button>
        </header>
    );
}