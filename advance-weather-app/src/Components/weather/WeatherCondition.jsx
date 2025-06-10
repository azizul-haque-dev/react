import cloudy from "../../assets/icons/cloud.svg";
import humidityIcon from "../../assets/icons/humidity.svg";
import tempMax from "../../assets/icons/temp-max.svg";
import tempMin from "../../assets/icons/temp-min.svg";
import windIcon from "../../assets/icons/wind.svg";
import { useWeatherContext } from "../../provider/index";

function WeatherCondition() {
  const { weatherData } = useWeatherContext();
  const { climate, maxTemperature, minTemperature, humidity, wind } = weatherData;

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        The climate is <u>{climate}</u>
      </p>
      <ul className="space-y-6 lg:space-y-6 w-full max-w-md">
        <li className="text-sm lg:text-lg flex justify-between items-center">
          <span>Temp max</span>
          <div className="flex items-center space-x-2">
            <p>{maxTemperature}</p>
            <img src={tempMax} alt="temp-max" className="w-6 h-6" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex justify-between items-center">
          <span>Temp min</span>
          <div className="flex items-center space-x-2">
            <p>{minTemperature}</p>
            <img src={tempMin} alt="temp-min" className="w-6 h-6" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex justify-between items-center">
          <span>Humidity</span>
          <div className="flex items-center space-x-2">
            <p>{humidity}</p>
            <img src={humidityIcon} alt="humidity" className="w-6 h-6" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex justify-between items-center">
          <span>Cloudy</span>
          <div className="flex items-center space-x-2">
            <p>86%</p>
            <img src={cloudy} alt="cloudy" className="w-6 h-6" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex justify-between items-center">
          <span>Wind</span>
          <div className="flex items-center space-x-2">
            <p>{wind}</p>
            <img src={windIcon} alt="wind" className="w-6 h-6" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WeatherCondition;
