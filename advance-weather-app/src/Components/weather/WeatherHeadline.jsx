import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import cloud from "../../assets/icons/cloud.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import pin from "../../assets/pin.svg";
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";

import { useWeatherContext } from "../../provider/index";
import { getFormatDate } from "../../utils/data.utils";

function WeatherHeadline() {
  const { weatherData } = useWeatherContext();
  const { climate, location, temperature, time } = weatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Clouds":
        return CloudIcon;
      case "Clear":
        return HazeIcon;
      case "Snow":
        return SnowIcon;
      case "Thunder":
        return ThunderIcon;
      default:
        return CloudIcon;
    }
  }

  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <img src={cloud} alt="cloud" className="w-20 md:w-28 lg:w-32" />

      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none font-bold">
          {Math.round(temperature)}°
        </h1>
        <div className="flex items-center space-x-2">
          <img src={pin} alt="location-pin" className="w-5 h-5" />
          <h2 className="text-2xl lg:text-[40px] font-medium">{location}</h2>
        </div>
      </div>

      <div className="flex items-center space-x-2 text-lg">
        <img
          src={getWeatherIcon(climate)}
          alt={climate}
          className="w-6 h-6"
        />
        <span className="capitalize">{climate}</span>
      </div>

      <p className="text-sm lg:text-lg text-gray-600">
        {getFormatDate(time, "time", false)} - {getFormatDate(time, "date", false)}
      </p>
    </div>
  );
}

export default WeatherHeadline;
