import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-purple-500/10 text-blue-500/100 p-4 flex justify-between item-center">
            <Link  href="/" className="cursor-pointer">
                <p className="font-extrabold text-left text-2xl">Vicinity Watcher</p>
            </Link>
            <nav>
                <ul className="flex space-x-4 cursor-pointer">
                    <Link href="/log-incident" className="hover:text-purple-800"><li>Log Incident</li></Link>
                    <Link href="/register-service" className="hover:text-purple-800"><li>Request Service</li></Link>
                    <Link href="/register" className="hover:text-purple-800"><li>Register/LogIn</li></Link>
                    <Link href="/weather" className="hover:text-purple-800"><li>Live Weather</li></Link>
                </ul>
            </nav>
        </header>
    );
}