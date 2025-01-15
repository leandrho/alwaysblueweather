import { SimpleIcon } from "../types";
import { getIcon } from "../utils";

type WeatherSimpleDetailProps = {
    title: string,
    value: number,
    icon: SimpleIcon,
    unit: string
}
    
export const WeatherSimpleDetail = ({title, value, icon, unit} : WeatherSimpleDetailProps) => {
  return (
    <div className="flex p-3 justify-between items-center">
        <h3 className="text-lg text-blue-950 font-semibold">{title}</h3>
        <div className="flex items-center gap-4">
            <p className="text-lg font-semibold">{`${value}`}<span className="text-base">{unit}</span></p>
            <figure className="max-w-9">
                <img src={getIcon(icon)} alt="icon details" />
            </figure>
        </div>
    </div>
  )
}
