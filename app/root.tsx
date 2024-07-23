import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import { useState, useEffect, useMemo } from "react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import Navbar from '@components/navbar';
import Drawer from '@components/drawer';
import DarkMenu from "@components/darkmenu";
import IndexPage from './routes/index';

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet, media: '(prefers-color-scheme: dark)' }
];

export default function App() {
    const [displayDrawer, setDisplayDrawer] = useState(false);
    const [darkModeSystem, setDarkModeSystem] = useState(false);

    useEffect(() => {
        if ((typeof window !== "undefined") && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches) {
            setDarkModeSystem(true);
        } else {
            setDarkModeSystem(false);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("resize", () => setDisplayDrawer(false));
        }
    }, []);

    const [useDarkModeSystem, setUseDarkModeSystem] = useState(true);
    const [darkModeSetting, setDarkModeSetting] = useState(darkModeSystem);
    const [displayDarkMenu, setDisplayDarkMenu] = useState(false);

    return (
        <html className={ useDarkModeSystem ? (darkModeSystem ? "dark" : "") : (darkModeSetting ? "dark" : "") }>
            <head>
                <link
                    rel="icon"
                    href="data:image/x-icon;base64,AA"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Meta />
                <Links />
            </head>
            <body className="dark:bg-black">
                { displayDrawer && 
                    <div className="absolute left-0 top-0 w-full h-screen bg-black/75">
                        <Drawer
                            setDisplayDrawer={setDisplayDrawer}
                            darkModeSystem={darkModeSystem}
                            useDarkModeSystem={useDarkModeSystem}
                            setUseDarkModeSystem={setUseDarkModeSystem}
                            darkModeSetting={darkModeSetting}
                            setDarkModeSetting={setDarkModeSetting}
                        />
                    </div> }
                { displayDarkMenu && 
                    <DarkMenu
                        useDarkModeSystem={useDarkModeSystem}
                        setUseDarkModeSystem={setUseDarkModeSystem}
                        darkModeSetting={darkModeSetting}
                        setDarkModeSetting={setDarkModeSetting}
                    /> }
                <Navbar
                    setDisplayDrawer={setDisplayDrawer}
                    darkModeSystem={darkModeSystem}
                    useDarkModeSystem={useDarkModeSystem}
                    setUseDarkModeSystem={setUseDarkModeSystem}
                    darkModeSetting={darkModeSetting}
                    setDarkModeSetting={setDarkModeSetting}
                    displayDarkMenu={displayDarkMenu}
                    setDisplayDarkMenu={setDisplayDarkMenu}
                />
                <IndexPage />
                <Outlet />
                <Scripts />
            </body>
        </html>
    );
}