import Link from "next/link";

export default function Login() {
    return (
        <div className="bg-gray-300 h-120 p-4">
            <form className="flex flex-col w-2/5 justify-between mx-auto my-10 p-2">
                <label className="block">Email</label>
                <input type="email" id="uemail" name="uemail" placeholder="Enter Your Email" className="border-solid border-2 border-purple-500 rounded" required />
                <label className="block">Password</label>
                <input type="password" id="upasswd" name="upasswd" placeholder="Enter Password" className="border-solid border-2 border-purple-500 rounded" required />
                <button type="submit" className="mt-4 bg-purple-500 text-white font-bold py-2 rounded">Login</button>
            </form>
        </div>
    );
}