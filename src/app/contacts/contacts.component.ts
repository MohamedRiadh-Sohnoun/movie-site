import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers : [Title]
})
export class ContactsComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('contact');
   }

  ngOnInit(): void {
  }

}
