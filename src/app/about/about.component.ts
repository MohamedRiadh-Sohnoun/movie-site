import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers : [Title]
})
export class AboutComponent implements OnInit {

  aboutContainer:any[] = [];
  constructor(private title: Title,_UsersService:UsersService) { 
   
  this.title.setTitle('Home');

  this.aboutContainer = _UsersService.users;

  }

  ngOnInit(): void {
  }

}
