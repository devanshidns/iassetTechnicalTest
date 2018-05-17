 var myApp = angular.module('myApp', []);

        myApp.controller('weatherCtrl', function ($scope, $http) {
            var vm = $scope;

            //Set static info
            vm.channelinfo = {
                heading: "Weather API Project",
                subheading: "iAsset Technical Project"
                , subheading2: { name: "Made by Devanshi", powered: "Powered by AngularJS/ OpenWeatherAPI" }
            };

            // Get Country city info
            $http.get('http://localhost:52135/countries.json').then(function (response) {
                vm.cities = response.data;
            }).
                catch(function onError(response) {
                    console.log(response);
                });

            // Oncountry change, get city
            $scope.GetCities = function () {
                vm.strCountry = vm.selectedCountry;
            };

            // GetWeather function
            $scope.GetWeather = function (selectedCity) {
                vm.customError = "";
                var strCity = selectedCity;
                var apiKey = "d25bcf6722ead769f048a5645c4d139e";
                var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q="
                    + strCity + "&appid=" + apiKey;

                $http.get(openWeatherURL).then(function (response) {
                    var weatherinfo = response.data;
                   
                    // Set weatherDetails Model
                    vm.weatherDetails = {
                        description: weatherinfo.weather[0].description,
                        icon: ("http://openweathermap.org/img/w/" + weatherinfo.weather[0].icon + ".png"),
                        wind: ((2.237 * weatherinfo.wind.speed).toFixed(1) + " mph"),
                        placename: weatherinfo.name,
                        country: weatherinfo.sys.country,
                        fTemp: ((weatherinfo.main.temp * (9 / 5) - 459).toFixed(1) + " ˚(F)"),
                        cTemp: ((weatherinfo.main.temp - 273).toFixed(1) + " ˚(C)"),
                        visibility: weatherinfo.visibility,
                        sky: weatherinfo.weather[0].description,
                        humidity: weatherinfo.main.humidity,
                        pressure: weatherinfo.main.pressure,
                    };
                    // start switch
                    var bgImage = "";
                    switch (vm.weatherDetails.description) {
                        case 'clear sky': 
                           { bgImage = "clearSky.jpg";
                            break;}
                        case 'few clouds': 
                           { bgImage = "fewClouds.jpg";
                            break;}
                        case 'scattered clouds':  
                            { bgImage = "scatteredClouds.jpg";
                            break;}
                        case ' broken clouds':  
                            { bgImage = "brokenClouds.jpg";
                            break;}
                        case 'shower rain': 
                            { bgImage = "showerRain.jpg";
                            break;}
                        case 'rain': 
                            { bgImage = "rain.jpg";
                            break;}
                         case 'thunderstorm': 
                            { bgImage = "thunderStorm.jpg";
                            break;}
                        case 'snow': 
                            { bgImage = "snow.jpg";
                            break;}
                         case 'mist': 
                            { bgImage = "mist.jpg";
                            break;}
                        default:
                            { bgImage = "clearSky.jpg";
                                break;}
                        };
                    // end switch
                     bgURL = "url('http://localhost:52135/"+bgImage+"')";
                     vm.weatherBackground = {
                                "background": bgURL,
                                "background-size": "cover"
                            };
                       
                }).
                catch(function onError(response) {
                    console.log(response);
                    vm.customError = "Weather Data not available for this city. Please choose another city.";
                    vm.weatherDetails = null;
                });
            };
            
            // Get local weather on first time page load
            $http.get('http://ip-api.com/json').then(function (response) {
                var resdat = response.data;
                $scope.GetWeather(resdat.city);
                var apiKey = "d25bcf6722ead769f048a5645c4d139e";
                var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q="
                    + resdat.city + "&appid=" + apiKey;
            });

        });