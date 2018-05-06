import { Component, OnInit } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  tabs: TabsComponent;

  constructor(tabs: TabsComponent) { 
    this.tabs = tabs;
  }

  ngOnInit() {
  }

  continue() {
    this.tabs.arrangeTabs(1);
  }
}
