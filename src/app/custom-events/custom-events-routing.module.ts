import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';

const routes: Routes = [
  { path:'',component: CustomEventsComponent, data: {title:'Custom Events' }},
  { path:'productlist',component: ProductListComponent, data: {title:'Products' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomEventsRoutingModule { }
