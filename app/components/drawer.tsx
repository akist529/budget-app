import { AiFillBank } from "@icons/ai";
import { CgClose } from "@icons/cg";

export default function Drawer(props: any) {
    const { setDisplayDrawer } = props;

    return (
        <div id="drawer" className="absolute grid grid-rows-2 grid-cols-1 justify-items-center bg-white w-full p-5">
            <button className="absolute right-2 top-2" onClick={() => setDisplayDrawer(false)}>
                <CgClose className="size-8 icon-violet-500" />
            </button>
            <a className="flex items-center gap-1 text-violet-500 text-4xl font-bold" href="/">
                <AiFillBank className="size-12 icon-violet-500" />
                BUDGET
            </a>
            <nav className="w-full">
                <ul className="flex flex-col gap-5">
                    <li>
                        <a href="/login" onClick={() => setDisplayDrawer(false)}>Login</a>
                    </li>
                    <li>
                        <a href="/" onClick={() => setDisplayDrawer(false)}>Home</a>
                    </li>
                    <li>
                        <a href="/budgets" onClick={() => setDisplayDrawer(false)}>Budgets</a>
                    </li>
                    <li>
                        <a href="/expenses" onClick={() => setDisplayDrawer(false)}>Expenses</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}