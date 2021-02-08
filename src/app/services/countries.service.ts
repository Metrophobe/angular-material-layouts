import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//imports from rxjs
import {Observable} from 'rxjs';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  readonly url:string = 'https://restcountries.eu/rest/v2/all'; //url to web api 

  constructor( private http:HttpClient) {}

  // the get method returns an obserbable => a stream of data that provides data over time...
  getCountries = ():Observable<Country[]> => {
      return this.http.get<Country[]>(this.url);
  }
}
