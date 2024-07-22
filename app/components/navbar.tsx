import { AiFillBank } from "@icons/ai";
import { SlMenu } from "@icons/sl";

export default function Navbar(props: any) {
    const { setDisplayDrawer } = props;

    return (
        <nav className="flex justify-between items-center px-5 py-5 sm:px-10 text-2xl">
            <a href="/">
                <AiFillBank className="flex-initial size-12 lg:size-16" />
            </a>
            <ul className="flex-auto justify-center items-center hidden lg:flex">
                <li className="flex flex-initial justify-center px-5">
                    <a href="/">Home</a>
                </li>
                <li className="flex flex-initial justify-center px-5">
                    <a href="/budgets">Budgets</a>
                </li>
                <li className="flex flex-initial justify-center px-5">
                    <a href="/expenses">Expenses</a>
                </li>
            </ul>
            <button className="flex-initial hidden lg:block">Log In</button>
            <button onClick={() => setDisplayDrawer(true)}>
                <SlMenu className="flex-initial lg:hidden size-8 lg:size-32" />
            </button>
        </nav>
    );
}