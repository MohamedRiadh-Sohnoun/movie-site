import { Component, OnInit } from '@angular/core';
import { NavserfService } from '../navserf.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
})
export class NotfoundComponent implements OnInit {
  constructor(public _NavserfService: NavserfService) {}

  ngOnInit(): void {
    this._NavserfService.toggle();
  }
}
