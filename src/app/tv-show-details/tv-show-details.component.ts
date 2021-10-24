import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.css']
})
export class TvShowDetailsComponent implements OnInit {

 movieId:any;
  movieDetials:any;
  imgPrefix:string ='https://image.tmdb.org/t/p/w500/';
   cat:any;
  allCat:any[]=[];
  x:string=``;
  y:string=``;
  z:string=``;
  w:string=``;

  constructor(private title: Title, private _ActivatedRoute:ActivatedRoute , private _UsersService:UsersService) { 
     this.title.setTitle('Tv details');
    this.movieId = _ActivatedRoute.snapshot.params.y;

    this._UsersService.getTvDetails(this.movieId).subscribe((data)=>{


        this.movieDetials  = data;
        console.log(this.movieDetials);
           this.movieDetials.genres.forEach((item:any) =>{
                 console.log(item.name);
                  this.x +=`${ item.name},`;
   
            })
            this.movieDetials.production_countries.forEach((item:any) =>{
                 console.log(item.name);
                  this.y +=`${ item.name}.`;
   
            })
              this.movieDetials.created_by.forEach((item:any) =>{
                 console.log(item.name);
                  this.z +=`${ item.name}.`;
                
   
            })
               this.movieDetials.spoken_languages.forEach((item:any) =>{
                 console.log(item.name);
                  this.w +=`${ item.name}`;
   
            })
          
    },
      (error)=>
            {
                    console.log('Connection Error '+error);
            }
            ,
            ()=>
            {}

           )}
     ngOnInit(): void {
  }
}
