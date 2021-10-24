import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) {

  }

  getTrending(mediaType: string, page:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=01394702203e9be55de6c87d5e013637&page=${page}`);
  }
  getPopular(page: any): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/popular?api_key=01394702203e9be55de6c87d5e013637&language=en-US&page=${page}`);
  }
  getMovieDetails(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=01394702203e9be55de6c87d5e013637&language=en-US`);

  }
   getMovieActor(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=01394702203e9be55de6c87d5e013637&language=en-US`);

  }
  getMovievideo(id: any): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=01394702203e9be55de6c87d5e013637&language=en-US`);

  }
   getTvDetails(id:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=01394702203e9be55de6c87d5e013637&language=en-US`);

  }
  getTvVideo(id: any): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=01394702203e9be55de6c87d5e013637&language=en-US`);

  }
  getPeople(page:any):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=01394702203e9be55de6c87d5e013637&language=en-US&page=${page}`);

  }
   getPeopleById(id:any):Observable<any>
  {
     return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=01394702203e9be55de6c87d5e013637&language=en-US`);

  }

  welcome()
  {
    window.alert("Welcome");
  }

  users =
  [
      {name:'abdoooo' , age:27 , gender:'male' , dateOfBirth:'1/1/2001'},
      {name:'mai' , age:27 , gender:'female' , dateOfBirth:'2/3/2001'},
      {name:'hambozo' , age:29 , gender:'male' , dateOfBirth:'5/6/2001'},
      {name:'ibrahim' , age:19 , gender:'male' , dateOfBirth:'1/1/2001'},
      {name:'aya' , age:17 , gender:'female' , dateOfBirth:'1/1/2001'},

  ]


}
