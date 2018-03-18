import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from "@angular/core";

@Component({
  selector: "yc-stock-status",
  template: `
  <input type='number' name="stock" [(ngModel)] ='updatedstockvalue'/>
  <button
    class='btn btn-primary'
    [style.background]='color'
    (dblclick)="stockValueChanged()"
  >
    Add Stock
  </button>
  `,
  styles: []
})
export class StockStatusComponent implements OnInit, OnChanges {
  @Input() stock: number;
  @Input() productId: number;
  @Output() stockValueChange = new EventEmitter();
  color = '';
  updatedstockvalue: number;
  stockValueChanged() {
      this.stockValueChange.emit({ id: this.productId, updatdstockvalue: this.updatedstockvalue });
      this.updatedstockvalue = null;
  }
  ngOnChanges() {
      if (this.stock > 10) {
          this.color = 'green';
      } else {
          this.color = 'red';
      }
  }

  constructor() {}

  ngOnInit() {}
}
