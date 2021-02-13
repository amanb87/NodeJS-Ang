import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';


export const routes: Routes = [
  { path: '', component: BoutiqueComponent, pathMatch: 'full' },
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  { path: 'electronics', loadChildren: () => import('./electronics/electronics.module').then(m => m.ElectronicsModule) },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
