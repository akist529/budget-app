import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [{ title: "Profile - Budget" }];
};

export default function Profile() {
    return (
        <div id="profile" className="w-full min-h-[calc(100vh-64px)] dark:bg-violet-950/25 dark:text-white flex flex-col justify-start items-center">
            <div className="flex flex-col justify-center items-center gap-3 py-12">
                <h2 className="text-4xl font-bold">Profile</h2>
                <p className="font-thin">Update your income information below to assist you with your budgeting needs.</p>
            </div>
            <form className="grid grid-rows-[1fr_1fr_auto] gap-8" action="">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="first_name" className="font-bold text-sm">First name</label>
                        <input id="first_name" name="first_name" type="text" className="border h-8 rounded-sm" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="last_name" className="font-bold text-sm">Last name</label>
                        <input id="last_name" name="last_name" type="text" className="border h-8 rounded-sm" required />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-bold text-sm">Email</label>
                        <input id="email" name="email" type="email" className="border h-8 rounded-sm" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone_number" className="font-bold text-sm">Phone number</label>
                        <div>
                            <select className="dark:text-black h-8 border rounded-sm" required>
                                <option value="US">US</option>
                                <option value="CA">CA</option>
                                <option value="EU">EU</option>
                            </select>
                            <input id="phone_number" name="phone_number" type="tel" className="border h-8 rounded-sm" required />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="gross_income" className="font-bold text-sm">Gross Income</label>
                        <input id="gross_income" name="gross_income" type="number" className="border h-8 rounded-sm" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="net_income" className="font-bold text-sm">Net Income</label>
                        <input id="net_income" name="net_income" type="number" className="border h-8 rounded-sm" required />
                    </div>
                </div>
                <div className="flex gap-2 item-center">
                    <input id="policy_agreement" name="policy_agreement" type="checkbox" required />
                    <p className="text-sm">By selecting this, you agree to our privacy policy.</p>
                </div>
                <button type="submit" className="bg-violet-500 px-6 py-3 rounded-lg border font-bold text-white text-sm">Update Profile</button>
            </form>
        </div>
    );
}