import { Links, Meta, Outlet, Scripts, MetaFunction } from "@remix-run/react";
import { useState, useEffect } from "react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import Navbar from '@components/navbar';
import Drawer from '@components/drawer';
import DarkMenu from "@components/darkmenu";
import { AppContext } from "@contexts/AppContext";
import Footer from "@components/footer";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet, media: '(prefers-color-scheme: dark)' }
];

export const meta: MetaFunction = () => {
    return [
        {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
        },
        { title: "Home - Budget" }
    ];
};

export default function App() {
    const [displayDrawer, setDisplayDrawer] = useState(false);
    const [darkModeSystem, setDarkModeSystem] = useState(false);
    const [useDarkModeSystem, setUseDarkModeSystem] = useState(true);
    const [darkModeSetting, setDarkModeSetting] = useState(darkModeSystem);
    const [displayDarkMenu, setDisplayDarkMenu] = useState(false);
    const [token, setToken] = useState("");

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
            window.addEventListener("resize", () => setDisplayDarkMenu(false));
            setToken(sessionStorage.getItem("token") || "");
        }
    }, []);

    return (
        <html className={ useDarkModeSystem ? (darkModeSystem ? "dark" : "") : (darkModeSetting ? "dark" : "") }>
            <head>
                <link
                    rel="icon"
                    href="data:image/x-icon;base64,AA"
                />
                <Meta />
                <Links />
            </head>
            <body className="dark:bg-black">
                <AppContext.Provider
                    value={{ 
                        displayDrawer, setDisplayDrawer,
                        darkModeSystem, setDarkModeSystem,
                        useDarkModeSystem, setUseDarkModeSystem,
                        darkModeSetting, setDarkModeSetting,
                        displayDarkMenu, setDisplayDarkMenu,
                        token, setToken
                    }}
                >
                    { displayDrawer && 
                        <div className="absolute left-0 top-0 w-full h-screen bg-black/75">
                            <Drawer />
                        </div> }
                    { displayDarkMenu && 
                        <DarkMenu /> 
                    }
                    <Navbar />
                </AppContext.Provider>
                <Outlet context={{
                    displayDrawer, setDisplayDrawer,
                    darkModeSystem, setDarkModeSystem,
                    useDarkModeSystem, setUseDarkModeSystem,
                    darkModeSetting, setDarkModeSetting,
                    displayDarkMenu, setDisplayDarkMenu,
                    token, setToken
                }} />
                <Footer />
                <Scripts />
            </body>
        </html>
    );
}