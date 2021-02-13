import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PostmessageComponent } from './components/postmessage/postmessage.component';
import { Form1Component } from './components/form1/form1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Form2Component } from './components/form2/form2.component';
import { Form3Component } from './components/form3/form3.component';

@NgModule({
  declarations: [
    AppComponent,
    BoutiqueComponent,
    PagenotfoundComponent,
    PostmessageComponent,
    Form1Component,
    Form2Component,
    Form3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
