import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountScaleComponent } from './amount-scale.component';

describe('AmountScaleComponent', () => {
  let component: AmountScaleComponent;
  let fixture: ComponentFixture<AmountScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
