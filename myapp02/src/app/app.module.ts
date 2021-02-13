import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BtnComponent } from './components/btn/btn.component';
import { ClassComponent } from './components/class/class.component';
import { ModelComponent } from './components/model/model.component';
import { ListviewComponent } from './components/listview/listview.component';
import { ChannelDetailComponent } from './components/channel-detail/channel-detail.component';
import { Listview2Component } from './components/listview2/listview2.component';
import { PowerOfPipe } from './pipes/power-of.pipe';
import { TempConverterPipe } from './pipes/temp-converter.pipe';
import { KfcComponent } from './components/kfc/kfc.component';
import { ParentComponent } from './components/parent/parent.component';
import { Child01Component } from './components/child01/child01.component';
import { Child02Component } from './components/child02/child02.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    BtnComponent,
    ModelComponent,
    ListviewComponent,
    ChannelDetailComponent,
    Listview2Component,
    PowerOfPipe,
    TempConverterPipe,
    KfcComponent,
    ParentComponent,
    Child01Component,
    Child02Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
