import { AiFillBank } from "@icons/ai";
import { SlMenu } from "@icons/sl";

export default function Navbar(props: any) {
    const { setDisplayDrawer } = props;

    return (
        <header className="flex justify-between items-center px-5 py-5 sm:px-10 text-2xl">
            <a href="/">
                <AiFillBank className="flex-initial size-12 lg:size-16" />
            </a>
            <nav className="flex-auto hidden lg:flex justify-between items-center">
                <ul className="flex-1 justify-center items-center hidden lg:flex">
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
                <a className="flex-initial hidden lg:block" href="/login">Log In</a>
            </nav>
            <button onClick={() => setDisplayDrawer(true)}>
                <SlMenu className="flex-initial lg:hidden size-8 lg:size-32" />
            </button>
        </header>
    );
}