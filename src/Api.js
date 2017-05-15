import superagent from 'superagent';
import jsonp from 'superagent-jsonp';

export function getWeatherData(units, coords) {
    const deferred = Promise.defer();
    const parsedUnits = units === 'C' ? 'metric' : 'imperial';
    superagent.get('http://api.openweathermap.org/data/2.5/weather')
        .query({
            units: parsedUnits,
            lat: coords.lat,
            lon: coords.lon,
            appid: 'YOUR_API_KEY'
        })
        .use(jsonp)
        .end((error, weatherData) => {
            if (error) {
                deferred.reject(error);
            } else {
                deferred.resolve(weatherData);
            }
        });
    return deferred.promise;
}

export function getLocationCoords() {
    const deferred = Promise.defer();

    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            (location) => {
                deferred.resolve({
                    lat: location.coords.latitude,
                    lon: location.coords.longitude
                });
            },
            (error) => {
                deferred.reject(error);
            }
        );
    } else {
        superagent.get('http://ipinfo.io/json')
            .use(jsonp) // We use superagent-jsonp
            .end((error, locationData) => {
                if (error) {
                    deferred.reject(error);
                } else {
                    deferred.resolve(locationData);
                }
            });
    }
    return deferred.promise;
}