import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabs: TabComponent[] = [];
  selectedTabIndex: number = 0;
  leftBtnInActive: boolean = true;
  rightBtnInActive: boolean = false;
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
    let tabIndex = this.getTabIndex(tab);

    this.arrangeTabs(tabIndex);
  }

  previous() {
    this.arrangeTabs(this.selectedTabIndex - 1);
  }

  next() {
    this.arrangeTabs(this.selectedTabIndex + 1);
  }

  arrangeTabs(tabIndex) {
    this.tabs.forEach((tab, i) => {
      tab.selected = i === tabIndex;
    });
    this.selectedTabIndex = tabIndex;
    this.selected.emit({selectedTab: this.tabs[tabIndex]});

    if(this.selectedTabIndex === 0) {
      this.leftBtnInActive = true;
      this.rightBtnInActive = false;
    } else if(this.selectedTabIndex === this.tabs.length - 1) {
      this.leftBtnInActive = false;
      this.rightBtnInActive = true;
    } else {
      this.leftBtnInActive = false;
      this.rightBtnInActive = false;
    }
  }

  getTabIndex(selectedTab) {
    return this.tabs.findIndex(tab => tab.tabTitle === selectedTab.tabTitle);
  }
}
