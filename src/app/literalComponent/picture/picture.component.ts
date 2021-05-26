import { Component, Input, OnInit } from '@angular/core';
import { ItemType } from '../text-box/text-box.component';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  @Input() item:ItemType;
  constructor() { }

  ngOnInit(): void {
  }

}
