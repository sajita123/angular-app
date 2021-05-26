import { Component, Input, OnInit } from '@angular/core';
import { ItemType } from '../text-box/text-box.component';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() item:ItemType;
  constructor() { }

  ngOnInit(): void {
  }

}
