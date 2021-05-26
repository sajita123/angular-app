import { Component, Input, OnInit } from '@angular/core';
import { ItemType } from '../text-box/text-box.component';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input() item:ItemType;
  constructor() { }

  ngOnInit(): void {
  }

}
