import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'investment-info',
  templateUrl: './investment-info.component.html',
  styleUrls: ['./investment-info.component.scss']
})
export class InvestmentInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  continue() {
    alert("Submit your form by integrating with appropriate API!!!");
  }
}
