import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Article } from './content/arts/article.type';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  siteData: any;
  url: string = "../assets/fakedata.json";

  constructor(private http:Http){
    http.get(this.url).subscribe(res => this.siteData = res.json());
  }
}
