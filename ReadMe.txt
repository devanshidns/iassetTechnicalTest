iAsset Technical Test - Display weather from API
------------------------------------------------

This project displays the weather condition and details for a chosen city.

Getting Started
----------------
1. Unzip the folder from the shared location and click on iassetTechnicalTest.csproj
2. Build and Run iassetTechnicalTest from Visual Studio.
3. A webpage will display showing the local weather. 
4. Choose the country and city from the dropdown and click 'Show Weather'
5. This will show the weather details for the given city along with a dynamic background. If the weather for the chosen city, an error message will display. 

API/ Data Used
--------------
1. As the Web Service API http://www.webservicex.net/globalweather.asmx?op=GetWeather was not available, the API http://api.openweathermap.org/data/2.5/weather?q= has been used along with a free key.

2. For enhanced user experience, on first load, the local weather is displayed. The local location for this is obtained from the IP information by using API: http://ip-api.com/json.

3. As the Country and city lists were not available, a local copy of a country json has been added to the project. This JSON file has couplets of country with their respective cities. This is a popular json downloaded from a private source and so is not gauranteed to be complete.

Data not found
---------------
The Time, Dew Point values were not available from the OpenWeatherAPI. So, these have not been displayed.