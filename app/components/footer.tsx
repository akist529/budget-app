export default function Footer() {
    return (
        <footer className="dark:text-white flex flex-col justify-center items-center dark:bg-violet-950/25">
            <div className="w-10/12 flex flex-col justify-center">
                <div className="h-px opacity-15 bg-gradient-to-r from-white to-white via-black dark:from-black dark:to-black dark:via-white"></div>
                <span className="px-24 py-6 font-['Arial'] text-slate-400 text-sm">© 2024 Budget. All rights reserved.</span>
            </div>
        </footer>
    );
}