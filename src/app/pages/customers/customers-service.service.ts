import { Injectable } from '@angular/core';
import { IpaidInvoices } from '../../components/incoives-summary/invoices-summary.interface';
import { paidInvoices, totalInvoices } from './customerMockData';

@Injectable({
  providedIn: 'root'
})
export class CustomersServiceService {

  //should be fetch or sort to get the right invoices data
  invoicesData: IpaidInvoices[] = paidInvoices;
  totalData: IpaidInvoices[] = totalInvoices;
  selectedTab:string="נדחו"
  
  highestPrice:number=0
  constructor() {
    this.setHighestPrice();
   }

  private setHighestPrice(): void {
    this.highestPrice = Math.max(
      ...this.invoicesData.map(invoice => parseFloat(invoice.totalAmount))
    );
  }
  getHighestPrice(): number {
    return this.highestPrice;
  }
}
