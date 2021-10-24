import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
  providers: [Title]
})
export class MoviedetailsComponent implements OnInit {

  movieId: any;
  movieDetials: any;
  movieActor: any;
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  videoPrefix ='https://www.youtube.com/embed/';
  cat: any;
  allCat: any[] = [];
  x: string = ``;
  y: string = ``;
  allActor:any;
  actorsName:any;
  actorsPhoto:any;
  movieVideo:any;
  play:any;

  constructor(private title: Title, private _ActivatedRoute: ActivatedRoute, private _UsersService: UsersService) {
    this.title.setTitle('Moive details');
    this.movieId = _ActivatedRoute.snapshot.params.x;

    this._UsersService.getMovieDetails(this.movieId).subscribe((data) => {
      this.movieDetials = data;
      console.log(this.movieDetials);
      this.movieDetials.genres.forEach((item: any) => {
        console.log(item.name);
        this.x += `${item.name} ,`;

      })
      this.movieDetials.production_countries.forEach((item: any) => {
        console.log(item.name);
        this.y += `${item.name} ,`;


      })
    },
      (error) => {
        console.log('Connection Error ' + error);
      }
      ,
      () => {


      })
     this._UsersService.getMovieActor(this.movieId).subscribe(
      (data)=>{

        this.movieActor=data;
        this.allActor = this.movieActor.cast.slice(0, 15);
        console.log(this.allActor)
        this.allActor.forEach((item: any) => {
         this.actorsName += `${item.name} ,`;
       })

      //  for(let i=0 ; i<this.allActor.length;i++){
      //    this.actorsName += `, ${this.allActor[i].name}`;
      //     console.log(this.actorsName);
      //    this.actorsPhoto = this.allActor[i].profile_path;
      //  }

     })
    this._UsersService.getMovievideo(this.movieId).subscribe(
      (data)=>{
        this.movieVideo = data.results;
       this.play =this.movieVideo[0].key ;
        console.log(this.play);
      })
}
  ngOnInit() {
  }

}




