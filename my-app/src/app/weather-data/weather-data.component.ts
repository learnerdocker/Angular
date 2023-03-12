import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import axios from "axios";
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  
  @Output() WeatherDataChild: EventEmitter<object> = new EventEmitter<object>
  weatherData = {tempF: 0, tempC: 0, lastUpdated: Date.now};
  //date: Date;
  resData : any;

  items :number[] = [1,2,3,4,5,6];

  //  options = {
  //   method: 'GET',
  //   url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  //   params: {q: 'dallas'},
  //   headers: {
  //     'X-RapidAPI-Key': 'cc3f4dc25bmsh5398534e62963a4p1c31a1jsnbb371118f7cc',
  //     'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  //   }
  // };
  
  constructor(private _weatherService : WeatherService) {
   // this.date = new Date();
    this.resData = {};
    //setInterval(()=> this.getCurrentWeather() , 2000);
  //   $(document).ready(function() {  
  //     $("h1").css("background-color", "green");  
  //  });
  }

  



  ngOnInit() {
    this.getCurrentWeather();
    console.log('ngOnIt - ',this.resData);
  }

  SendWeatherData() {
    this.WeatherDataChild.emit(this.weatherData);
  }

  getCurrentWeather() {
    this._weatherService.getWeather().subscribe((data) => {
      console.log(data);
      this.weatherData.tempF = data.current.temp_f;
      this.weatherData.tempC = data.current.temp_c;
      this.weatherData.lastUpdated = data.current.last_updated;
    });
  }
}


