import {Component  , OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from './../users.service';


@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css'],
    providers : [Title]
})

export class HomeComponent  implements OnDestroy
{
  //  movie:any;
    usersData:any[] = [];
    trendingMovies:any[] =[];
    trendingTv:any[] =[];
    imgPrefix:any = "https://image.tmdb.org/t/p/w500/";
    channel:any;

    constructor(private title: Title,_UsersService:UsersService , private _Router:Router)
    {
    this.title.setTitle('Home page');


     this.channel =   _UsersService.getTrending('movie',1).subscribe(

            (data)=>
            {
                    this.trendingMovies = data.results.slice(0,10);
                    console.log(data);
            },
            (error)=>
            {
                    console.log('Connection Error '+error);
            }
            ,
            ()=>
            {
                console.log("Api 5alst");
            }

     )



     _UsersService.getTrending('tv',1).subscribe(

        (data)=>
        {
                this.trendingTv = data.results.slice(0,10);
                console.log(data);
        },
        (error)=>
        {
                console.log('Connection Error '+error);
        }
        ,
        ()=>
        {
            console.log("Api 5alst");
        }

 )

       // _UsersService.getTrending().then((data)=> {console.log('ss')})

    }

    userName = "Ahmed Ali";
    userAge  = 25;
    width = "500";
    imgSrc = "assets/images/two.png";
    user = {name:'ahmed' , age:27 , gender:'male' , dateOfBirth:'1/1/2001'};
    friends = ["ahmed" , "sayed" , "taha" , "hazem" , "hamza"];
    isMarried = true;
    onSale = true;
    show = false;
    x = "ahmed";

    toggleTable()
    {
        this.show = !this.show;
        // if(this.show == false)
        // {
        //     this.show = true;
        // }
        // else
        // {
        //     this.show = false;
        // }
    }


    // welcome()
    // {
    //     window.alert('Hello');
    // }


    ngOnDestroy()
    {
        console.log("Home Component Destroied");
        this.channel.unsubscribe();
    }

}










