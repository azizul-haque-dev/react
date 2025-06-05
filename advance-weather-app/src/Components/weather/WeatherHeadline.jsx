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
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={cloud} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormatDate(time, "time", false)}-{" "}
        {getFormatDate(time, "date", false)}
      </p>
    </div>
  );
}

export default WeatherHeadline;
