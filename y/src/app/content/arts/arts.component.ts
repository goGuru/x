import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Article } from './article.type';

@Component({
  selector: 'arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {
  @Input() articles: Article[];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(){
    console.log(this.articles);
  }

}
