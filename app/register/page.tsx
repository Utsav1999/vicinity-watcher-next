import Link from "next/link"

export default function Register() {
    return (
        <div className="bg-gray-300 h-124 p-4">
            <form className="flex flex-col w-2/5 justify-between mx-auto p-2">
                <label className="block">Select Your Role</label>
                <select id="roles" name="roles" className="border-solid border-2 border-purple-500 rounded">
                    <option value="admin">Admin</option>
                    <option value="resident">Resident</option>
                </select>
                <label className="block">Name</label>
                <input type="text" id="uname" name="uname" placeholder="Enter Your Name" className="border-solid border-2 border-purple-500 rounded" required />
                <label className="block">Email</label>
                <input type="email" id="uemail" name="uemail" placeholder="Enter Your Email" className="border-solid border-2 border-purple-500 rounded" required />
                <label className="block">Phone</label>
                <input type="text" id="uphone" name="uphone" placeholder="Enter Your Phone No." className="border-solid border-2 border-purple-500 rounded" required />
                <label className="block">Password</label>
                <input type="password" id="upasswd" name="upasswd" placeholder="Enter Password" className="border-solid border-2 border-purple-500 rounded" required />
                <label className="block">Confirm Password</label>
                <input type="password" id="ucpasswd" name="ucpasswd" placeholder="Re-enter Password" className="border-solid border-2 border-purple-500 rounded" required />
                <button type="submit" className="mt-4 bg-purple-500 text-white font-bold py-2 rounded">Register</button>
            </form>
            <p className="text-center">
                Do you already have an account?&nbsp;
                <Link href="/login" className="text-blue-500 hover:text-purple-500 cursor-pointer underline underline-offset-2">
                    Login Here
                </Link>
            </p>
        </div>
    );
}