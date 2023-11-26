export interface weatherData {
    "latitude": number,
    "longitude": number,
    "generationtime_ms": number,
    "utc_offset_seconds": number,
    "timezone": string,
    "timezone_abbreviation": string,
    "elevation": number,
    "current_units": {
        "time": string,
        "interval": string,
        "temperature_2m": string,
        "relative_humidity_2m": string,
        "apparent_temperature": string,
        "is_day": string,
        "rain": string,
        "cloud_cover": string,
        "pressure_msl": string,
        "surface_pressure": string,
        "wind_speed_10m": string,
        "wind_direction_10m": string
    },
    "current": {
        "time": string,
        "interval": number,
        "temperature_2m": number,
        "relative_humidity_2m": number,
        "apparent_temperature": number,
        "is_day": number,
        "rain": number,
        "cloud_cover": number,
        "pressure_msl": number,
        "surface_pressure": number,
        "wind_speed_10m": number,
        "wind_direction_10m": number
    }
}