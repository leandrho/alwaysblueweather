import { z } from 'zod';

export const WeatherSchema = z.object({
    name: z.string(),
    timezone: z.number(),
    main: z.object({
        temp: z.number(),
        feels_like: z.number(),
        temp_min: z.number(),
        temp_max: z.number(),
        pressure: z.number(),
        humidity: z.number(),
    }),
    visibility: z.number(),
    wind: z.object({
        speed: z.number(),
        deg: z.number(),
    }),
    sys: z.object({
        country: z.string(),
        sunrise: z.number(),
        sunset: z.number(),
    }),
    clouds: z.object({
        all: z.number()
    })
});

export const WeatherCoordsSchema = z.object({
    country: z.string(),
    name: z.string(),
    lat: z.number(),
    lon: z.number(),
    state: z.string()
})