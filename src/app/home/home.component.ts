import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   names = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.name.subscribe(res => this.names = res);
    this._data.changeName(this.names);
  }

}
