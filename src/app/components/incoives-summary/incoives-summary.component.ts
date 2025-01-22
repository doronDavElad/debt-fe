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
  @Input() selectedTab: string ='';

  onTabChange(event: any): void {
    const tabLabel = event.tab.textLabel;

    if (tabLabel === 'נדחו') {
      this.selectedTab=tabLabel
    } else if (tabLabel === 'ללא תגובה') {
      this.selectedTab=tabLabel
    } else if (tabLabel === 'בחוב') {
      this.selectedTab=tabLabel
    }

  }
}
