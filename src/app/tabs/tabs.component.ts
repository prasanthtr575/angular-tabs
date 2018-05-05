import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabs: TabComponent[] = [];

  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTab(tab:TabComponent) {
    if (this.tabs.length === 0) {
      tab.selected = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab:TabComponent) {
    this.tabs.forEach((tab) => {
      tab.selected = false;
    });
    tab.selected = true;
    this.selected.emit({selectedTab: tab});
  }
}
