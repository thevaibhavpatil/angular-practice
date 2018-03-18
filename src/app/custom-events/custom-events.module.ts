import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomEventsRoutingModule } from './custom-events-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { StockStatusComponent } from './product-list/stock-status.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CustomEventsRoutingModule,
    FormsModule
  ],
  declarations: [ProductListComponent, CustomEventsComponent, StockStatusComponent]
})
export class CustomEventsModule { }
