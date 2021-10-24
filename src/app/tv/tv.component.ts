import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
     providers : [Title]
})
export class TvComponent implements OnInit,OnDestroy {

     movie:any;
    trendingTv:any;
    imgPrefix:any = "https://image.tmdb.org/t/p/w500/";
    channel:any;
    term:any='';
    page:any;
    totalPage: any;

   constructor(private title: Title, private _UsersService:UsersService,private _Router:Router){
    this.title.setTitle('TvShows');
    this.handel(1);

   }

  ngOnInit(): void {
  }

  tv(type:any , page:any){
  this._UsersService.getTrending(type,page).subscribe(

    (data) => {
      this.trendingTv = data.results;
      this.totalPage = data.total_pages;
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
  handel(event: any) {
    this.page= event;
    this.tv('tv', this.page);
 }
 ngOnDestroy()
    {
        // console.log("Home Component Destroied");
        // this.channel.unsubscribe();
    }

}
