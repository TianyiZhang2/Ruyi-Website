import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      // Add urls here
      { path: '', component: HomePageComponent },
    ])
  ],
  declarations: [ 
    AppComponent, 
    TopBarComponent, 
    HomePageComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ],
})
export class AppModule { }
