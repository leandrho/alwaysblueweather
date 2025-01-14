import z from "zod"
import { WeatherSchema, WeatherCoordsSchema } from '../schema/weather-schema';

export type WeatherInfo = z.infer<typeof WeatherSchema>;   
export type WeatherCoords = z.infer<typeof WeatherCoordsSchema>;

export enum SimpleIcon {
    TempMax,
    TempMin,
    Temp,
    Windy,
    Humadity,
    Cloudy
}