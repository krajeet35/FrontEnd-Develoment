import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstAppComponent } from './MyApps/first-app/first-app.component';
import { FirstAppItemComponent } from './first-app-item/first-app-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstAppComponent,
    FirstAppItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
