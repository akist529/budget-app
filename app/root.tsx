import {
    Links,
    Meta,
    Outlet,
    Scripts,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import IndexPage from './routes/index';

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet }
];

export default function App() {
    return (
        <html>
            <head>
                <link
                    rel="icon"
                    href="data:image/x-icon;base64,AA"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <IndexPage />
                <Outlet />
                <Scripts />
            </body>
        </html>
    );
}