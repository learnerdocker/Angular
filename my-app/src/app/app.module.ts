import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetChecked } from 'src/app/pipes/setChecked.pipe';
import { Truthy } from 'src/directives/truthy.directive';

import { HttpClientModule } from '@angular/common/http'
import { FalsyColor } from 'src/directives/falsyColor.directive';
import { TestComponent } from './component/test.component';
import { TestDirective } from 'src/directives/test.directive';
import { ChildComponent } from './child/child.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { WeatherService } from './services/weather.service';
import { TemplateDemoComponent } from './template-demo/template-demo.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FirstComponent } from './first-component/first-component.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SetChecked,
    Truthy,
    FalsyColor,
    TestDirective,
    ChildComponent,
    WeatherDataComponent,
    TemplateDemoComponent,
    AddUserComponent,
    FirstComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
