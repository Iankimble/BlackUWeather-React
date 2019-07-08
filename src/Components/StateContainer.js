import React, { Component } from "react";
import axios from "axios";
import Results from "./Results";

class StateContainer extends Component {

    state = {
        search: "",
        weatherForcast: "",
        gif: ""
    }

    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.city);

        const weatherKey = process.env.REACT_APP_WEATHER_KEY;
        let city = this.state.city;
        let apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",us&APPID=" + weatherKey + "&units=imperial";

        axios.get(apiURL).then(
            data => {
                console.log(data);
                console.log(data.data.main);
                console.log("__________WEATHER DATA BELOW___________")
                console.log(`description: ` + data.data.weather[0].description);
                console.log(`temperature: ` + data.data.main.temp);
                console.log(`temperature high: ` + data.data.main.temp_max);
                console.log(`temperature low: ` + data.data.main.temp_min);

                let weatherDescription = data.data.weather[0].description;
                console.log(weatherDescription);

                let temperature = data.data.main.temp;
                let high = data.data.main.temp_max;
                let low = data.data.main.temp_min;
                let gifKeyword = "";


                this.setState({
                    weatherTemp: temperature, 
                    weatherDescript: weatherDescription,
                    weatherHi: high,
                    weatherLow: low
                });


                if (weatherDescription === "clear sky") {
                    console.log("Yes lawd! if it's warm enough go out and get some air. Enjoy!");
                    gifKeyword = "mary j blidge 90s";
                }
                else if (weatherDescription === "overcast clouds") {
                    console.log("Not bad");
                }

                else if (weatherDescription === "few clouds") {
                    console.log("At least its not super cloudy");
                }
                else if (weatherDescription === "scattered clouds") {
                    console.log("Should be fine...");
                    gifKeyword = "shaq"
                }
                else if (weatherDescription === "broken clouds") {
                    console.log("Lets see some sun!");
                    gifKeyword = "looking"
                }
                else if (weatherDescription === "shower rain") {
                    console.log("Bring an umbrella and do your best to stay dry, friends");
                }
                else if (weatherDescription === "rain") {
                    console.log("Umbrella time y'all. Don't get caught slippin");
                }
                else if (weatherDescription === "thunderstorm") {
                    console.log("You should probably try to stay in and under cover as much as possible");
                }
                else if (weatherDescription === "snow") {
                    console.log("Go make a snow angel!");
                }
                else if (weatherDescription === "mist") {
                    console.log("I like mist personally");
                }


                else if (weatherDescription === "heavy intensity dirzzle") {
                    console.log();
                }
                else if (weatherDescription === "light intensity drizzle") {
                    console.log();
                }
                else if (weatherDescription === "drizzle rain") {
                    console.log();
                }
                else if (weatherDescription === "heavy intensity drizzle rain") {
                    console.log();
                }
                else if (weatherDescription === "shower rain and drizzle") {
                    console.log();
                }
                else if (weatherDescription === "heavy shower rain and drizzle") {
                    console.log();
                }
                else if (weatherDescription === "shower drizzle") {
                    console.log();
                }
                else if (weatherDescription === "light rain") {
                    console.log();
                }
                else if (weatherDescription === "moderate rain") {
                    console.log();
                }
                else if (weatherDescription === "heavy intensity rain") {
                    console.log();
                }
                else if (weatherDescription === "extreme rain") {
                    console.log();
                }
                else if (weatherDescription === "light intensity shower rain") {
                    console.log();
                }
                else if (weatherDescription === "shower rain") {
                    console.log();
                }
                else if (weatherDescription === "heavy intensity shower rain") {
                    console.log();
                }
                else if (weatherDescription === "ragged shower rain") {
                    console.log();
                }
                else if (weatherDescription === "light snow") {
                    console.log();
                }
                else if (weatherDescription === "snow") {
                    console.log();
                }
                else if (weatherDescription === "heavy snow") {
                    console.log();
                }
                else if (weatherDescription === "sleet") {
                    console.log();
                }
                else if (weatherDescription === "light shower sleet") {
                    console.log();
                }
                else if (weatherDescription === "light rain and snow") {
                    console.log();
                }
                else if (weatherDescription === "rain and snow") {
                    console.log();
                }
                else if (weatherDescription === "light shower snow") {
                    console.log();
                }
                else if (weatherDescription === "shower snow") {
                    console.log();
                }
                else if (weatherDescription === "heavy shower snow") {
                    console.log();
                }
                else if (weatherDescription === "mist") {
                    console.log();
                }
                else if (weatherDescription === "smoke") {
                    console.log();
                }
                else if (weatherDescription === "haze") {
                    console.log();
                }
                else if (weatherDescription === "sand/ dust whirls") {
                    console.log();
                }
                else if (weatherDescription === "fog") {
                    console.log();
                }
                else if (weatherDescription === "sand") {
                    console.log();
                }
                else if (weatherDescription === "dust") {
                    console.log();
                }
                else if (weatherDescription === "volcanic ash") {
                    console.log();
                }
                else if (weatherDescription === "squalls") {
                    console.log();
                }
                else if (weatherDescription === "tornado") {
                    console.log();
                }
                else if (weatherDescription === "ash") {
                    console.log();
                }

                let giphyKey = process.env.REACT_APP_GIF_KEY;
                let gifTerm = gifKeyword;
                let apiURL2 = "http://api.giphy.com/v1/gifs/search?q=" + gifTerm + "&api_key=" + giphyKey;

                axios.get(apiURL2).then(
                    data => {
                        console.log(data);
                        console.log(data.data.data[0].images.original.url);
                        
                        let gif = data.data.data[0].images.original.url;

                        this.setState({
                            giphyFeel:gif
                        });
                    }
                )

            }

        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>
                        Please search a U.S city:
        <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="submit" />
                </form>
                
                <Results 
                                    weatherTemp={this.state.weatherTemp} 
                                    weatherDescript={this.state.weatherDescript}
                                    weatherHi={this.state.weatherHi}
                                    weatherLow={this.state.weatherLow}
                                    gifImg={this.state.giphyFeel}
                
                />
            </div>
        )
    }

}

export default StateContainer;