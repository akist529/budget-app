import { useCallback } from "react";
import { NavLink, useLocation } from "@remix-run/react";
import { AiFillBank } from "@icons/ai";
import { BiLogIn } from "@icons/bi";
import { CgClose } from "@icons/cg";
import { GrMoney, GrSystem } from "@icons/gr";
import { MdLightMode, MdDarkMode, MdOutlineDarkMode, MdAccountBox, MdHome } from "@icons/md";
import { RiMoneyDollarBoxFill } from "@icons/ri";

export default function Drawer(props: any) {
    const { setDisplayDrawer, darkModeSystem, useDarkModeSystem, setUseDarkModeSystem, darkModeSetting, setDarkModeSetting } = props;
    const location = useLocation();

    const toggleDarkMode = useCallback((state: boolean) => {
        setDarkModeSetting(state);
        setUseDarkModeSystem(false);
    }, []);

    const changeTheme = useCallback(() => {
        const themeSelect = document.getElementById("theme") as HTMLSelectElement;
        const theme = themeSelect.value || "";

        if (theme === 'light') {
            setUseDarkModeSystem(false);
            setDarkModeSetting(false);
        } else if (theme === 'dark') {
            setUseDarkModeSystem(false);
            setDarkModeSetting(true);
        } else {
            setUseDarkModeSystem(true);
        }
    }, []);

    return (
        <div id="drawer" className="absolute right-0 grid grid-rows-[auto_1fr] gap-5 bg-white w-full sm:max-w-xs h-screen p-5 dark:bg-stone-950 animate-drawer">
            <div id="drawer_header">
                <button className="absolute right-2 top-2" onClick={() => setDisplayDrawer(false)}>
                    <CgClose className="size-8 icon-violet-500" />
                </button>
                <NavLink
                    to="/"
                    className="flex justify-center items-center gap-1 dark:text-white text-4xl font-bold"
                    onClick={() => setDisplayDrawer(false)}
                >
                    <AiFillBank className="size-12 icon-violet-500" />
                    BUDGET
                </NavLink>
            </div>
            <div id="drawer_content" className="flex flex-col gap-1 dark:text-white">
                <nav>
                    <ul className="flex flex-col gap-1">
                        <li className="flex justify-start align-center dark:hover:text-black dark:hover:icon-black">
                            <NavLink
                                to="/login"
                                onClick={() => setDisplayDrawer(false)}
                                className={({ isActive, isPending }) => isActive ? 
                                    "w-full p-4 bg-slate-200 text-violet-500 font-bold rounded-md group/sample flex items-center gap-3" : 
                                    "w-full p-4 active:bg-slate-200 hover:bg-slate-100 rounded-md group/sample flex items-center gap-3"}
                            >
                                <BiLogIn
                                    className={(location.pathname === "/login") ? 
                                        "size-6 icon-violet-500" : 
                                        "size-6 icon-black dark:icon-white dark:group-hover/sample:icon-black"}
                                />
                                Log in
                            </NavLink>
                        </li>
                        <li className="flex justify-start align-center dark:hover:text-black">
                            <NavLink
                                to="/signup"
                                onClick={() => setDisplayDrawer(false)}
                                className={({ isActive, isPending }) => isActive ? 
                                    "w-full p-4 bg-slate-200 text-violet-500 font-bold rounded-md group/sample flex items-center gap-3" : 
                                    "w-full p-4 active:bg-slate-200 hover:bg-slate-100 rounded-md group/sample flex items-center gap-3"}
                            >
                                <MdAccountBox
                                    className={(location.pathname === "/signup") ? 
                                        "size-6 icon-violet-500" : 
                                        "size-6 icon-black dark:icon-white dark:group-hover/sample:icon-black"}
                                />
                                Sign up
                            </NavLink>
                        </li>
                        <li className="flex justify-start align-center dark:hover:text-black">
                            <NavLink
                                to="/"
                                onClick={() => setDisplayDrawer(false)}
                                className={({ isActive, isPending }) => isActive ? 
                                    "w-full p-4 bg-slate-200 text-violet-500 font-bold rounded-md group/sample flex items-center gap-3" : 
                                    "w-full p-4 active:bg-slate-200 hover:bg-slate-100 rounded-md group/sample flex items-center gap-3"}
                            >
                                <MdHome
                                    className={(location.pathname === "/") ? 
                                        "size-6 icon-violet-500" : 
                                        "size-6 icon-black dark:icon-white dark:group-hover/sample:icon-black"} />
                                Home
                            </NavLink>
                        </li>
                        <li className="flex justify-start align-center dark:hover:text-black">
                            <NavLink
                                to="/budgets"
                                onClick={() => setDisplayDrawer(false)}
                                className={({ isActive, isPending }) => isActive ? 
                                    "w-full p-4 bg-slate-200 text-violet-500 font-bold rounded-md group/sample flex items-center gap-3" : 
                                    "w-full p-4 active:bg-slate-200 hover:bg-slate-100 rounded-md group/sample flex items-center gap-3"}
                            >
                                <GrMoney className={(location.pathname === "/budgets") ? 
                                    "size-6 icon-violet-500" : 
                                    "size-6 icon-black dark:icon-white dark:group-hover/sample:icon-black"} />
                                Budgets
                            </NavLink>
                        </li>
                        <li className="flex justify-start align-center dark:hover:text-black">
                            <NavLink
                                to="/expenses"
                                onClick={() => setDisplayDrawer(false)}
                                className={({ isActive, isPending }) => isActive ? 
                                    "w-full p-4 bg-slate-200 text-violet-500 font-bold rounded-md group/sample flex items-center gap-3" : 
                                    "w-full p-4 active:bg-slate-200 hover:bg-slate-100 rounded-md group/sample flex items-center gap-3"}
                            >
                                <RiMoneyDollarBoxFill className={(location.pathname === "/expenses") ? 
                                    "size-6 icon-violet-500" : 
                                    "size-6 icon-black dark:icon-white dark:group-hover/sample:icon-black"} />
                                Expenses
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <hr className="py-2 opacity-15" />
                <div className="flex justify-center items-center gap-3">
                    <label htmlFor="theme">Theme</label>
                    <select name="theme" id="theme" className="text-white bg-violet-500 p-4 rounded-md cursor-pointer" onChange={() => changeTheme()}>
                        <option
                            selected={!useDarkModeSystem && !darkModeSetting}
                            value="light"
                        >
                            Light Mode
                        </option>
                        <option
                            selected={!useDarkModeSystem && darkModeSetting}
                            value="dark"
                        >
                            Dark Mode
                        </option>
                        <option
                            selected={useDarkModeSystem}
                            value="system"
                        >
                            System Setting
                        </option>
                    </select>
                </div>
            </div>
        </div>
    );
}