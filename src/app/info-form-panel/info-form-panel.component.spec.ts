import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFormPanelComponent } from './info-form-panel.component';

describe('InfoFormPanelComponent', () => {
  let component: InfoFormPanelComponent;
  let fixture: ComponentFixture<InfoFormPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFormPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFormPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
