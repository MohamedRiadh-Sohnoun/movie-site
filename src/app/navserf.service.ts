import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavserfService {
  isError: boolean;
  constructor() {
    this.isError = true;
  }
  toggle() {
    this.isError = !this.isError;
  }
}
