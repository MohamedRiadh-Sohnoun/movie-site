import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
   providers : [Title]
})
export class MoviesComponent implements OnInit , OnDestroy {
  channel: any;
  trendingMovies: any;
  imgPrefix:any = "https://image.tmdb.org/t/p/w500/";
  term:any="";
  popularMovies:any;
  Page:any;
  totalPage:any;

  constructor(private title: Title, private _UsersService:UsersService) {
    this.title.setTitle('Moives');
    this.handel(1);



  }
  trending(type:any ,page: any){
    this._UsersService.getTrending(type,page).subscribe(

      (data) => {
        this.trendingMovies = data.results;
        console.log(data);
      },
      (error) => {
        console.log('Connection Error ' + error);
      }
      ,
      () => {
        console.log("Api 5alst");
      }
    )

  }
 popular(page:any){
   this._UsersService.getPopular(page).subscribe(
     (data) => {
       this.totalPage = data.total_pages;
       console.log(this.totalPage);
       this.popularMovies = data.results;
     }
   )
 }
  handel(event:any){
    this.Page= event;
    this.popular(this.Page);
    this.trending('movie', this.Page);
  }

  ngOnInit(): void {
  }

   ngOnDestroy()
    {
        // console.log("Home Component Destroied");
        // this.channel.unsubscribe();
    }
}
