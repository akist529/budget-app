import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "Expenses - Budget" }];
};

export default function Expenses() {
    return (
        <div id="expenses">
        </div>
    );
}