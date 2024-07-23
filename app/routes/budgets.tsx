import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "Budgets - Budget" }];
};

export default function Budgets() {
    return (
        <div id="budgets">
        </div>
    );
}