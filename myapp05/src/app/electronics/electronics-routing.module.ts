import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaptopComponent } from './components/laptop/laptop.component';
import { TvComponent } from './components/tv/tv.component';


export const routes: Routes = [
    { path: 'tv', component: TvComponent },
    { path: 'laptop', component: LaptopComponent }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicsRoutingModule { }