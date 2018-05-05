import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { MyCashComponent } from './my-cash/my-cash.component';
import { AmountScaleComponent } from './amount-scale/amount-scale.component';
import { InfoFormPanelComponent } from './info-form-panel/info-form-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    MyCashComponent,
    AmountScaleComponent,
    InfoFormPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
