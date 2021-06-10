import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      // Add urls here
      { path: '', component: HomePageComponent },
      { path: 'contact', component: ContactComponent },
    ])
  ],
  declarations: [ 
    AppComponent, 
    TopBarComponent, 
    HomePageComponent, 
    ContactComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ],
})
export class AppModule { }
