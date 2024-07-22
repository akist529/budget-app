import { AiFillBank } from "@icons/ai";
import { SlMenu } from "@icons/sl";
import { BiLogIn } from "@icons/bi";
import { MdDarkMode, MdOutlineDarkMode } from "@icons/md";

export default function Navbar(props: any) {
    const { setDisplayDrawer } = props;

    return (
        <header className="flex justify-between items-center gap-5 px-5 py-5 sm:px-10 text-2xl">
            <a className="flex items-center gap-1 text-violet-500 text-4xl font-bold" href="/">
                <AiFillBank className="flex-initial size-12 icon-violet-500" />
                BUDGET
            </a>
            <button className="hidden lg:block">
                <MdOutlineDarkMode className="size-12 icon-violet-500" />
            </button>
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
                <a className="flex-initial hidden lg:block flex items-center" href="/login">
                    Log In
                    <BiLogIn className="size-8 icon-black" />
                </a>
            </nav>
            <button onClick={() => setDisplayDrawer(true)}>
                <SlMenu className="flex-initial lg:hidden size-8 lg:size-32 icon-violet-500" />
            </button>
        </header>
    );
}