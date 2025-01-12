import { Component } from '@angular/core';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [SubHeaderComponent],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss'
})
export class InvoicesComponent {

}
