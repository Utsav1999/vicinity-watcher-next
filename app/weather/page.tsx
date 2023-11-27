'use client'
import Link from "next/link";
import { useState } from "react"

export default function Weather() {
    const [longlat, setLongLat] = useState({
        longitude: "",
        latitude: ""
    });

    const [isProcessing, setIsProcessing] = useState(false);

    function cleanFormData() {
        setLongLat({
            longitude: "",
            latitude: ""
        });
    }

    function handleChange(e: any) {
        setLongLat({ ...longlat, [e.target.name]: e.target.value });
    }

    function handleClick() {
        setIsProcessing(true);
        cleanFormData();
    }

    return (
        <div className="relative bg-gray-300 body-height">
            <img alt="Weather Page Cover Image" src="/weather-cover.jpg" className="px-4 pt-2" />
            <div className="mx-auto p-4">
                <form>
                    <div>
                        <label className="block">
                            Enter Latitude
                        </label>
                        <input type="text" id="latitude" name="latitude" className="w-full p-1 border-solid border-2 border-blue-500 rounded" placeholder="Enter Latitude" onChange={handleChange} required />
                    </div>
                    <div>
                        <label className="block">
                            Enter Longitude
                        </label>
                        <input type="text" id="longitude" name="longitude" className="w-full p-1 border-solid border-2 border-blue-500 rounded" placeholder="Enter Longitude" onChange={handleChange} required />
                    </div>
                    <Link href={`/weather/${longlat.longitude}/${longlat.latitude}`}>
                        <button type="button" className={`text-white border-solid border-2 border-green-800 py-2 px-4 mt-2 ${isProcessing ? "bg-black cursor-not-allowed" : "bg-green-500 hover:bg-green-800 cursor-pointer" }`} onClick={handleClick}>Submit</button>
                    </Link>
                </form>
            </div>
            <style jsx>
                {
                    `
                        .body-height{
                            height: 120vh;
                        }
                    `
                }
            </style>
        </div>
    );
}