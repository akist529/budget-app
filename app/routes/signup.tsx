import { MetaFunction, NavLink } from "@remix-run/react";
import { AiFillBank } from "@icons/ai";
import dotenv from 'dotenv';
dotenv.config();

export const meta: MetaFunction = () => {
    return [{ title: "Sign up - Budget" }];
};

export default function Signup() {
    return (
        <div id="signup" className="w-full min-h-[calc(100vh-64px)] dark:bg-violet-950/25 dark:text-white flex flex-col justify-start items-center">
            <div className="flex flex-col justify-center items-center gap-3 py-12">
                <AiFillBank className="size-16 icon-violet-500" />
                <h2 className="text-4xl font-bold">Sign up for Budget</h2>
            </div>
            <form className="grid grid-rows-[auto_auto_auto_auto_auto_auto] gap-8" action={`${process.env.API_URL}/signup`}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="first_name">First name</label>
                        <input id="first_name" name="last_name" type="text" className="border h-8 rounded-sm" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="last_name">Last name</label>
                        <input id="last_name" name="last_name" type="text" className="border h-8 rounded-sm" required />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email address *</label>
                    <input id="email" name="email" type="text" className="border h-8 rounded-sm" required />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password *</label>
                    <input id="password" name="password" type="text" className="border h-8 rounded-sm" required />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="confirm_password">Confirm password *</label>
                    <input id="confirm_password" name="confirm_password" type="text" className="border h-8 rounded-sm" required />
                </div>
                <button type="submit" className="bg-violet-500 px-6 py-3 rounded-lg border font-bold text-white text-sm">Sign up</button>
                <p className="text-center">Already have an account? <NavLink to="/login">Log in</NavLink></p>
            </form>
        </div>
    );
}