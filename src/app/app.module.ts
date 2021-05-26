import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckboxComponent } from './literalComponent/checkbox/checkbox.component';
import { RadioComponent } from './literalComponent/radio/radio.component';
import { TextareaComponent } from './literalComponent/textarea/textarea.component';
import { DropdownComponent } from './literalComponent/dropdown/dropdown.component';
import { TextBoxComponent } from './literalComponent/text-box/text-box.component';
import { PictureComponent } from './literalComponent/picture/picture.component';
import { MaterialModule } from './material/material.module';
import { LandingComponent } from './landing/landing.component';
import { DataTableComponent } from './literalComponent/data-table/data-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CheckboxComponent,
    RadioComponent,
    TextareaComponent,
    DropdownComponent,
    TextBoxComponent,
    PictureComponent,
    LandingComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
