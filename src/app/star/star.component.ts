import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
@Input() rating=5;
cropWidth=75;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth=this.rating*75/5;
  }
  ngOnInit(): void {
  }
}
