import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 9bdd7324f686f50a4d465586b58c66f75f53ac4a

@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    FooterComponent,
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule
=======
    BrowserAnimationsModule,
>>>>>>> 9bdd7324f686f50a4d465586b58c66f75f53ac4a
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
