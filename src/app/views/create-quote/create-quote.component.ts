import { Component } from '@angular/core';
import { RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, FormControlDirective, FormLabelDirective, FormDirective, FormSelectDirective, ButtonDirective } from '@coreui/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    FormControlDirective,
    FormLabelDirective,
    FormDirective,
    FormSelectDirective,
    ButtonDirective,
    FormsModule,
    CommonModule
  ]
})
export class CreateQuoteComponent {
  items = [
    { itemNumber: '', price: '', uom: '', material: '', materialDescription: '', discount: '', quantity: '' }
  ];

  uomOptions = ['PCS', 'KG', 'L', 'M'];

  addItem() {
    this.items.push({ itemNumber: '', price: '', uom: '', material: '', materialDescription: '', discount: '', quantity: '' });
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

}
