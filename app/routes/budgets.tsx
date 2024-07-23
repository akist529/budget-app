import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "Budgets - Budget" }];
};

export default function Budgets() {
    return (
        <div id="budgets" className="w-full min-h-[calc(100vh-64px)] dark:bg-violet-950/25 dark:text-white">
            <h2>Budgets</h2>
        </div>
    );
}