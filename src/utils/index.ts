export const kelvinToCelsius = (temp: number):number => {
    return Math.round(Number((temp-273.15).toFixed(1)) * 2) / 2;
}