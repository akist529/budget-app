import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "Log in - Budget" }];
};

export default function Login() {
    return (
        <div id="login">
        </div>
    );
}