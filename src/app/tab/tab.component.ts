import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit{
  @Input() tabTitle;
  selected: boolean = false;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }

  ngOnInit() {
  }
}
