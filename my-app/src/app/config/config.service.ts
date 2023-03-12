import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable()
export class ConfigService {  
    url: string = '';
    options = { }

    constructor(private http: HttpClient) {
    
    }

    configUrl = 'assets/config.json';


    getData () : any {
        this.http.get(this.url, this.options).subscribe((response)=> {
            return JSON.stringify(response);
        })
    }
}