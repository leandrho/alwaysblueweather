import { SimpleIcon } from '../types/index';

export const kelvinToCelsius = (temp: number):number => {
    return Math.round(Number((temp-273.15).toFixed(1)) * 2) / 2;
}

export const getIcon = (icon :SimpleIcon) : string => {
    switch (icon) {
        case SimpleIcon.Cloudy:
            return '/cloudy.svg';
        case SimpleIcon.Temp:
            return '/temp.svg';
        case SimpleIcon.TempMax:
            return '/tempmax.svg';
        case SimpleIcon.TempMin:
            return '/tempmin.svg';
        case SimpleIcon.Windy:
            return '/wind.svg';
        case SimpleIcon.Humadity:
            return '/humadity.svg';
        default:
            return '';
    }
}