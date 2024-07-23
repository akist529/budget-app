import { useCallback, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "@icons/md";
import { GrSystem } from "@icons/gr";

export default function DarkMenu(props: any) {
    const { useDarkModeSystem, setUseDarkModeSystem, darkModeSetting, setDarkModeSetting } = props;

    const toggleDarkMode = useCallback((state: boolean) => {
        setDarkModeSetting(state);
        setUseDarkModeSystem(false);
    }, []);

    return (
        <div id="dark_menu" className="absolute left-72 top-20 bg-white dark:bg-indigo-950 dark:text-white px-2 py-4 rounded-xl border">
            <ul className="flex flex-col">
                <li>
                    <button
                        className="flex justify-between items-center gap-2 w-full"
                        onClick={() => toggleDarkMode(false)}
                    >
                        Light Mode
                        <MdLightMode />
                    </button>
                </li>
                <li>
                    <button
                        className="flex justify-between items-center gap-2 w-full"
                        onClick={() => toggleDarkMode(true)}
                    >
                        Dark Mode
                        <MdDarkMode />
                    </button>
                </li>
                <li>
                    <button
                        className="flex justify-between items-center gap-2 w-full"
                        onClick={() => setUseDarkModeSystem(true)}
                    >
                        System Setting
                        <GrSystem />
                    </button>
                </li>
            </ul>
        </div>
    );
}