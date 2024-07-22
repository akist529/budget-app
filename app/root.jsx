import {
    Links,
    Meta,
    Outlet,
    Scripts,
} from "@remix-run/react";

import IndexPage from './routes/index';

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