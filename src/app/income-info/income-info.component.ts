import { Component, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'income-info',
  templateUrl: './income-info.component.html',
  styleUrls: ['./income-info.component.scss']
})
export class IncomeInfoComponent implements OnInit {
  tabs: TabsComponent
  constructor(tabs: TabsComponent) {
    this.tabs = tabs;
   }

  ngOnInit() {
  }

  continue() {
    this.tabs.arrangeTabs(2);
  }

}
