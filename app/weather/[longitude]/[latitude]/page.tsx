'use client'
import { weatherData } from "@/src/components/interfaces/interface";
import { useParams } from "next/navigation";

const baseURL = process.env["NEXT_PUBLIC_WEATHER_API"] as string;

async function getWeatherData(latitude : any, longitude : any) {
    const finalURL = `${baseURL}/?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,rain,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m&timezone=auto&forecast_days=1`;
    const response = await fetch(finalURL);
    if(!response.ok) {
        throw new Error("Weather API failure!!!");
    }
    return response.json();
}

export default async function WeatherData() {
    const params = useParams();
    // console.log(params);
    const longlat = { ...params }; 
    const weatherData: weatherData = await getWeatherData(longlat.latitude, longlat.longitude);
    console.log(weatherData);
    return (
        <div>

        </div>
    );
}