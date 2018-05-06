import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { MyCashComponent } from './my-cash/my-cash.component';
import { AmountScaleComponent } from './amount-scale/amount-scale.component';
import { InfoFormPanelComponent } from './info-form-panel/info-form-panel.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { IncomeInfoComponent } from './income-info/income-info.component';
import { InvestmentInfoComponent } from './investment-info/investment-info.component';
import { TabIndexComponent } from './tab-index/tab-index.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    MyCashComponent,
    AmountScaleComponent,
    InfoFormPanelComponent,
    PersonalInfoComponent,
    IncomeInfoComponent,
    InvestmentInfoComponent,
    TabIndexComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
