import { Component } from '@angular/core';
import {
  RowComponent,
  ColComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  TableDirective,
  PaginationComponent,
  PageItemDirective,
  PageLinkDirective,
  ButtonDirective
} from '@coreui/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],  // Corrected property name
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [  // Removed the duplicate imports property
    RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    TableDirective,
    PaginationComponent,
    PageItemDirective,
    PageLinkDirective,
    RouterModule,
    ButtonDirective
  ]
})
export class UsersComponent {}
