import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
   providers : [Title]
})
export class PeopleComponent implements OnInit {
  channel: any;
  trendingPeople: any;
  imgPrefix:any = "https://image.tmdb.org/t/p/w500/";
  term:any="";
  popularMovies:any;
  Page:any;
  totalPage:any;

  constructor(private title: Title,private _UsersService:UsersService ) {
      this.title.setTitle('people page');
      this.handel(1);

  }
  ngOnInit(): void {
  }
  people(page: any){
    this._UsersService.getPeople(page).subscribe(
    (data) => {
        this.trendingPeople = data.results;
        this.Page = data.page;
        this.totalPage = data.total_pages;
      console.log(data);
    },
    (error) => {
     // console.log('Connection Error ' + error);
    }
    ,
    () => {
     // console.log("Api 5alst");
    }

  )
}
  handel(event: any) {
    this.Page = event;
    this.people(this.Page);
  }
}
