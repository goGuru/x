import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Header } from './header.type';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() inData: Header;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(){
    console.log(this.inData);
  }
}
