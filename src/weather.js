const weather = (() => {

    async function getWeatherData(location){
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=226ba94bc10d0cba0f5597c5a7d1c742`);
            if(!response.ok) throw new Error(`City ${location} not found`);
            const data = await response.json();
            console.log(data);
            return data;
        } catch(error){
            alert(error);
            return null;
        }
    }
    return {getWeatherData};
})();

export default weather;