import { weatherData } from "@/src/components/interfaces/interface";
import { useParams } from "next/navigation";

interface Props {
    params: {
        longitude: string,
        latitude: string
    }
}

const baseURL = process.env["NEXT_PUBLIC_WEATHER_API"] as string;

async function getWeatherData(latitude: any, longitude: any) {
    const finalURL = `${baseURL}/?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,rain,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m&timezone=auto&forecast_days=1`;
    const response = await fetch(finalURL, {cache: 'no-store'});
    if (!response.ok) {
        throw new Error("Weather API failure!!!");
    }
    return response.json();
}

export default async function WeatherData({ params }: Props) {
    const longlat = { ...params };
    const weatherData: weatherData = await getWeatherData(longlat.latitude, longlat.longitude);
    return (
        <div className="bg-gray-300 text-blue-500/100 p-6 h-120">
            <p className="text-4xl text-center font-bold">
                {weatherData.timezone}
            </p>
            <div className="mt-7 text-2xl">
                <ul className="flex space-x-5">
                    <li>Date and Time: <span className="font-bold">{weatherData.current.time}&nbsp;{weatherData.timezone_abbreviation}</span></li>
                    <li> Is Day?: <span className="font-bold">
                        {
                            weatherData.current.is_day ? `Day` : `Night`
                        }
                        </span>
                    </li>
                    <li>Temperature: <span className="font-bold">{weatherData.current.temperature_2m}{weatherData.current_units.temperature_2m}</span></li>
                </ul>
                <ul className="flex space-x-5 my-4">
                    <li>Relative Humidity: <span className="font-bold">{weatherData.current.relative_humidity_2m}{weatherData.current_units.relative_humidity_2m}</span></li>
                    <li>Rain: <span className="font-bold">{weatherData.current.rain}{weatherData.current_units.rain}</span></li>
                    <li>Cloud Coverage: <span className="font-bold">{weatherData.current.cloud_cover}{weatherData.current_units.cloud_cover}</span></li>
                    <li>Wind Speed: <span className="font-bold">{weatherData.current.wind_speed_10m}{weatherData.current_units.wind_speed_10m}</span></li>
                    <li>Wind Direction: <span className="font-bold">{weatherData.current.wind_direction_10m}{weatherData.current_units.wind_direction_10m}</span></li>
                </ul>
            </div>
        </div>
    );
}