import z from "zod"
import { WeatherSchema, WeatherCoordsSchema } from '../schema/weather-schema';

export type WeatherInfo = z.infer<typeof WeatherSchema>;   
export type WeatherCoords = z.infer<typeof WeatherCoordsSchema>;
export type WeatherSearch = {
    name: string, 
    country_code: string,
}