import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvComponent } from './components/tv/tv.component';
import { LaptopComponent } from './components/laptop/laptop.component';
import { ElectronicsRoutingModule } from './electronics-routing.module';



@NgModule({
  declarations: [TvComponent, LaptopComponent],
  imports: [
    CommonModule,
    ElectronicsRoutingModule
  ]
})
export class ElectronicsModule { }
