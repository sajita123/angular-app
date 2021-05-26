import { Component, Input, OnInit } from '@angular/core';
import { ItemType } from '../text-box/text-box.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() item:ItemType;
  dataSource:any = [];
  constructor() { }

  ngOnInit(): void {
    this.dataSource=this.item.value
  }

}
