import { Component, Input, OnInit } from '@angular/core';
import { ItemType } from '../text-box/text-box.component';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() item:ItemType;
  constructor() { }

  ngOnInit(): void {
  }

}
