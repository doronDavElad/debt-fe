import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { IpaidInvoices } from './invoices-summary.interface';
import { InvoicesDisplayDataComponent } from '../invoices-display-data/invoices-display-data.component';

@Component({
  selector: 'app-incoives-summary',
  standalone: true,
  imports: [MatTabsModule,InvoicesDisplayDataComponent],
  templateUrl: './incoives-summary.component.html',
  styleUrl: './incoives-summary.component.scss'
})
export class IncoivesSummaryComponent {
  @Input() invoicesData: IpaidInvoices[] = [];
  @Input() highestPrice: number =0;

}
