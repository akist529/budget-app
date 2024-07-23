import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "Profile - Budget" }];
};

export default function Profile() {
    return (
        <div id="profile" className="w-full min-h-[calc(100vh-64px)] dark:bg-violet-950/25 dark:text-white">
            <div>
                <h2>Profile</h2>
                <p>Update your income information below to assist you with your budgeting needs.</p>
            </div>
            <form>
                <label htmlFor="gross_income">Gross Income</label>
                <input id="gross_income" name="gross_income" type="number" />
            </form>
        </div>
    );
}