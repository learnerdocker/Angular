import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http : HttpClient) { }

  options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: 'dallas'},
    headers: {
      'X-RapidAPI-Key': 'cc3f4dc25bmsh5398534e62963a4p1c31a1jsnbb371118f7cc',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  getWeather() : Observable<any> {
    let result : any;
    result = this._http.get(this.options.url, this.options);
    console.log("getWeather - ", result);
    return result;
  }

  getCurrentWeather() : any{
    axios.request(this.options).
    then( (response) => {
      // console.log(response.data);
      // console.log("service resposne.data")
      return response;
    }).catch(function (error) {
      console.error(error);
    });
  }
}
