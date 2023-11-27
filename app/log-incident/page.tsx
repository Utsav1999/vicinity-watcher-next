export default function IncidentLog() {
    return (
        <div className="bg-gray-300 p-5">
            <p className="text-blue-500 text-left text-2xl p-4">
                <span className="font-bold">Info:</span> This form is to log any incident in your vicinity. For service request, check service request section.
            </p>
            <form className="flex flex-col mx-auto my-auto justify-between w-2/5">
                <label className="">Email: </label>
                <input type="" id="" name="" placeholder="" className="" required />
                <label className="">Incident Title: </label>
                <input type="" id="" name="" placeholder="" className="" required />
                <label className=""> Incident Description: </label>
                <textarea id="" name="" placeholder="" className="" required></textarea>
                <button type="submit" className="">Log Incident</button>
            </form>
        </div>
    );
}