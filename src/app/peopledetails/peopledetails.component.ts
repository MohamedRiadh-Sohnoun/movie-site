import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.css']
})
export class PeopledetailsComponent implements OnInit {

  peopleId:any;
  movieDetials:any;
  imgPrefix:string ='https://image.tmdb.org/t/p/w500/';
   cat:any;
  allCat:any[]=[];
  x:string=``;
  y:string=``;
  gender:any;

  constructor(private title: Title, private _ActivatedRoute:ActivatedRoute , private _UsersService:UsersService) { 
     this.title.setTitle('people details');
    this.peopleId = _ActivatedRoute.snapshot.params.z;

    this._UsersService.getPeopleById(this.peopleId).subscribe((data)=>{


        this.movieDetials  = data;
        console.log("people data");
        console.log(this.movieDetials);
        if(data.gender == 1){
           console.log("female");
           this.gender='female';
           
        }
        else{
            console.log("male");
            this.gender='male';
        }
         
    },
      (error)=>
            {
                    console.log('Connection Error '+error);
            }
            ,
            ()=>
            {
               
       
          }

           )}
     ngOnInit(): void {
  }
   

}
