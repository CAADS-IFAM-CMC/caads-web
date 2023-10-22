import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppModule } from 'src/app/app.module';

@NgModule({
  imports: [
    CommonModule,
    AppModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
