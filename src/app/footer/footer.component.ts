import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers : [Title]
})
export class FooterComponent {

  constructor(private title: Title) { 
     this.title.setTitle('footer');
  }



}
