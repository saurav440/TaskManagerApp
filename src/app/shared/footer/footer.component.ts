import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
currentYear:any;
  constructor() { }

  ngOnInit() {
    this.currentYear= "2019";
  }

}
