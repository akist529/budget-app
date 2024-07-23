import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "Sign up - Budget" }];
};

export default function Signup() {
    return (
        <div id="signup" className="w-full min-h-[calc(100vh-64px)] dark:bg-violet-950/25 dark:text-white">
            <h2>Sign up</h2>
        </div>
    );
}