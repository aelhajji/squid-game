import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content : any
  constructor() {
    let data = new DataService();
    this.content = data.getHomeContent();
   }

  ngOnInit(): void {
  }

}
