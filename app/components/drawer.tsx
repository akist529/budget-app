import { NavLink } from "@remix-run/react";
import { AiFillBank } from "@icons/ai";
import { CgClose } from "@icons/cg";
import { MdDarkMode, MdOutlineDarkMode } from "@icons/md";

export default function Drawer(props: any) {
    const { setDisplayDrawer } = props;

    return (
        <div id="drawer" className="absolute grid grid-rows-{auto_1fr} gap-5 bg-white w-full p-5">
            <div id="drawer_header">
                <button className="absolute right-2 top-2" onClick={() => setDisplayDrawer(false)}>
                    <CgClose className="size-8 icon-violet-500" />
                </button>
                <NavLink
                    to="/"
                    className="flex justify-center items-center gap-1 text-violet-500 text-4xl font-bold"
                >
                    <AiFillBank className="size-12 icon-violet-500" />
                    BUDGET
                </NavLink>
            </div>
            <div id="drawer_content" className="flex flex-col gap-1">
                <nav>
                    <ul className="flex flex-col gap-1">
                        <li className="flex justify-start align-center">
                            <NavLink
                                to="/login"
                                onClick={() => setDisplayDrawer(false)}
                                className={({ isActive, isPending }) => isActive ? 
                                    "w-full p-4 bg-slate-200 text-violet-500 font-bold rounded-md" : 
                                    "w-full p-4 active:bg-slate-200 hover:bg-slate-100 rounded-md"}
                            >Log in</NavLink>
                        </li>
                        <li className="flex justify-start align-center">
                            <NavLink
                                to="/signup"
                                onClick={() => setDisplayDrawer(false)}
                                className={({ isActive, isPending }) => isActive ? 
                                    "w-full p-4 bg-slate-200 text-violet-500 font-bold rounded-md" : 
                                    "w-full p-4 active:bg-slate-200 hover:bg-slate-100 rounded-md"}
                            >Sign up</NavLink>
                        </li>
                        <li className="flex justify-start align-center">
                            <NavLink
                                to="/"
                                onClick={() => setDisplayDrawer(false)}
                                className={({ isActive, isPending }) => isActive ? 
                                    "w-full p-4 bg-slate-200 text-violet-500 font-bold rounded-md" : 
                                    "w-full p-4 active:bg-slate-200 hover:bg-slate-100 rounded-md"}
                            >Home</NavLink>
                        </li>
                        <li className="flex justify-start align-center">
                            <NavLink
                                to="/budgets"
                                onClick={() => setDisplayDrawer(false)}
                                className={({ isActive, isPending }) => isActive ? 
                                    "w-full p-4 bg-slate-200 text-violet-500 font-bold rounded-md" : 
                                    "w-full p-4 active:bg-slate-200 hover:bg-slate-100 rounded-md"}
                            >Budgets</NavLink>
                        </li>
                        <li className="flex justify-start align-center">
                            <NavLink
                                to="/expenses"
                                onClick={() => setDisplayDrawer(false)}
                                className={({ isActive, isPending }) => isActive ? 
                                    "w-full p-4 bg-slate-200 text-violet-500 font-bold rounded-md" : 
                                    "w-full p-4 active:bg-slate-200 hover:bg-slate-100 rounded-md"}
                            >Expenses</NavLink>
                        </li>
                    </ul>
                </nav>
                <button className="text-white bg-violet-500 p-4 rounded-md flex items-center gap-1">
                    Dark Mode
                    <MdOutlineDarkMode className="size-6 icon-white" />
                </button>
            </div>
        </div>
    );
}