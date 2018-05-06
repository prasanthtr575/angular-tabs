import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentInfoComponent } from './investment-info.component';

describe('InvestmentInfoComponent', () => {
  let component: InvestmentInfoComponent;
  let fixture: ComponentFixture<InvestmentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
