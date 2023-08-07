import React, { useEffect, useState } from 'react';
import './styles/global.scss';

export const App = () => {
	const [coords, setCords] = useState({});
	const [currentWeatherData, setCurrentWeatherData] = useState({});
	const [forecastWeatherData, setForecastWeatherData] = useState({});
	const [errorMsg, setErrorMsg] = useState({});

	useEffect(() => {
		if (!navigator.geolocation) {
			setErrorMsg({ browser: 'Ваш браузер не дружит с геолокацией...' });
		} else {
			navigator.geolocation.getCurrentPosition(success, error);
		}

		function success(position) {
			const { longitude, latitude } = position.coords;
			setCords({ latitude, longitude });
		}

		function error() {
			setErrorMsg({ ...error, geo: 'Не удалось определить геолокацию!' });
		}
	}, []);

	useEffect(() => {
		if (coords?.latitude && coords?.longitude) {
			fetch(
				`${process.env.OW_API_URL_CURRENT}?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.OW_API_KEY}&units=metric&lang=ru`
			)
				.then((res) => res.json())
				.then((data) => setCurrentWeatherData(data))
				.catch((err) => setErrorMsg({ ...errorMsg, currentRes: err }));
			
			fetch(
				`${process.env.OW_API_URL_FORECAST}?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.OW_API_KEY}&units=metric&lang=ru`
			)
				.then((res) => res.json())
				.then((data) => setForecastWeatherData(data))
				.catch((err) => setErrorMsg({ ...errorMsg, forecastRes: err }));
		}
	}, [coords]);

	console.log('cords:', coords);

	console.log('current:', currentWeatherData);
	console.log('forecast:', forecastWeatherData);

	return (
		<>
			<h1>Hello</h1>
			<p>lat: {coords.latitude}</p>
			<p>lon: {coords.longitude}</p>
		</>
	);
};
