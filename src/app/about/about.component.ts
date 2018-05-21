import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

   names = [];
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { }

  ngOnInit() {
    this._data.name.subscribe(res => this.names = res);
    this._data.changeName(this.names);
  }

  GoHome() {
    this.router.navigate(['']);
  }
}
