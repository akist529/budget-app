export default function PageNotFound() {
    return (
        <div id="404" className="w-full min-h-[calc(100vh-64px)] dark:bg-violet-950/25 flex flex-col justify-center items-center text-center gap-6 font-['Arial']">
            <h1 className="text-purple-500 font-bold">404</h1>
            <h2 className="text-4xl font-bold dark:text-white">Page not found</h2>
            <p className="text-slate-600 dark:text-white">Sorry, we couldn't find the page you were looking for.</p>
            <a href="/" className="bg-purple-500 hover:bg-purple-400 px-5 py-2 rounded-md font-bold text-white">Go home</a>
        </div>
    );
}