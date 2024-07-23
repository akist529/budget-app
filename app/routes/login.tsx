import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "Log in - Budget" }];
};

export default function Login() {
    return (
        <div id="login" className="w-full min-h-[calc(100vh-64px)] dark:bg-violet-950/25 dark:text-white">
            <h2>Log in</h2>
        </div>
    );
}