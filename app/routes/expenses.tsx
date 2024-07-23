import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "Expenses - Budget" }];
};

export default function Expenses() {
    return (
        <div id="expenses" className="w-full min-h-[calc(100vh-64px)] dark:bg-violet-950/25 dark:text-white">
            <h2>Expenses</h2>
        </div>
    );
}