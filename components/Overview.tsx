import { FaCloud, FaLocationPin } from 'react-icons/fa6';
import type { Current } from '@/types/WeatherType';
import { FaThermometerHalf } from 'react-icons/fa';

const OverView = ({ data }: { data: Current }) => {
    return (
        <div className="rounded-xl mt-0 bg-gray-800 p-6">
            <div className='flex justify-between'>
            <h3 className="text mb-3 font-semibold uppercase text-gray-400">
                <FaLocationPin className="inline-block" /> Unnao
            </h3>
            <p className='text-sm text-gray-400'>
                Just Now 
            </p>
            </div>
            <div className="flex my-4 items-center justify-between">
                <div>
                    <h2 className="text-6xl font-medium">{data.temp.toFixed(1)}°</h2>
                    <p className="md:text-base mt-1 text-gray-400">
                        <FaThermometerHalf className="inline-block" /> Feels like: {data.feels_like}°
                    </p>
                </div>
                <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                    className="-my-6 md:size-32"
                />
            </div>
            <div className="mt-4 flex items-center justify-between">
                <p className="font-medium capitalize text-gray-400 md:text-xl">{data.weather[0].description}</p>
                <p className="md:text-sm">
                    <FaCloud className="inline-block" /> Clouds: {data.clouds}%
                </p>
                {/* <p className="md:text-sm">Feels like: {data.feels_like}</p> */}
            </div>

            {/* 
                <div>
                    <p className="flex items-center text-6xl font-semibold text-gray-100 md:text-5xl">
                        <span>{data.temp}°</span>
                        <img
                            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                            className="size-28"
                        />
                    </p>
                </div>

                <div>
                    <p className="mt-4 font-semibold capitalize">{data.weather[0].description}</p>
                    <p className="text-sm text-gray-300">Feels like {data.feels_like.toFixed(1)}°</p>
                </div>
            </div> */}

            {/* <div className="flex w-full justify-between rounded-lg bg-gray-800 p-3 text-xs font-medium text-gray-300 shadow-md">
                <p>
                    <FaTemperatureArrowUp className="inline-block" /> Max: {data.main.temp_max.toFixed(1)}°
                </p>
                <p>
                    <FaTemperatureArrowDown className="inline-block" /> Min: {data.main.temp_min.toFixed(1)}°
                </p>
                <p>
                    <FaCloud className="inline-block" /> Clouds: {data.clouds.all}%
                </p>
            </div> */}
            {/* <div className="mt-12 flex flex-col items-center justify-between text-center md:flex-row">
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} className="-my-4 size-32" />
                <p className="text-7xl font-semibold">{weather.main.temp.toFixed(0)}°</p>
                <p className="text-sm text-gray-400">Feels like {weather.main.feels_like.toFixed(1)}°</p>
                <p className="mt-2 text-2xl font-semibold capitalize text-gray-300">{weather.weather[0].description}</p>

                <div className="mt-6 flex w-full justify-between rounded-lg bg-gray-800 p-3 text-xs font-medium text-gray-300 shadow-md">
                    <p>
                        <FaTemperatureArrowUp className="inline-block" /> Max: {weather.main.temp_max.toFixed(1)}°
                    </p>
                    <p>
                        <FaTemperatureArrowDown className="inline-block" /> Min: {weather.main.temp_min.toFixed(1)}°
                    </p>
                    <p>
                        <FaCloud className="inline-block" /> Clouds: {weather.clouds.all}%
                    </p>
                </div>
            </div> */}
        </div>
    );
};

export default OverView;
