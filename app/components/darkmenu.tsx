import { useCallback, useEffect, useContext } from "react";
import { MdDarkMode, MdLightMode } from "@icons/md";
import { GrSystem } from "@icons/gr";
import { AppContext } from "@contexts/AppContext";
import AppContextType from "@customTypes/AppContextType";

export default function DarkMenu(props: any) {
    const appContext = useContext(AppContext);
    const { useDarkModeSystem, setUseDarkModeSystem, darkModeSetting, setDarkModeSetting } = appContext as AppContextType;

    const toggleDarkMode = useCallback((state: boolean) => {
        setDarkModeSetting(state);
        setUseDarkModeSystem(false);
    }, []);

    return (
        <div id="dark_menu" className="absolute left-60 top-20 bg-white dark:bg-indigo-950 dark:text-white px-2 py-4 rounded-xl border">
            <ul className="flex flex-col">
                <li>
                    <button
                        className="flex justify-between items-center gap-2 w-full"
                        onClick={() => toggleDarkMode(false)}
                    >
                        Light Mode
                        <MdLightMode className="icon-violet-500" />
                    </button>
                </li>
                <li>
                    <button
                        className="flex justify-between items-center gap-2 w-full"
                        onClick={() => toggleDarkMode(true)}
                    >
                        Dark Mode
                        <MdDarkMode className="icon-violet-500" />
                    </button>
                </li>
                <li>
                    <button
                        className="flex justify-between items-center gap-2 w-full"
                        onClick={() => setUseDarkModeSystem(true)}
                    >
                        System Setting
                        <GrSystem className="icon-violet-500" />
                    </button>
                </li>
            </ul>
        </div>
    );
}