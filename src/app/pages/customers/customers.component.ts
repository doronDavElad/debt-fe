
import { Component } from '@angular/core';
import { IncoivesSummaryComponent } from "../../components/incoives-summary/incoives-summary.component";
import { IpaidInvoices } from '../../components/incoives-summary/invoices-summary.interface';
import { CustomersServiceService } from './customers-service.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [IncoivesSummaryComponent],
  providers: [CustomersServiceService],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  invoicesData:IpaidInvoices[] = [];
  highestPrice: number =0 ;
  selectedTab:string="נדחו"

  constructor(private customerService: CustomersServiceService){}
  ngOnInit(): void {
    this.invoicesData = this.customerService.invoicesData;
    this.selectedTab = this.customerService.selectedTab;
    this.highestPrice = this.customerService.getHighestPrice();
   
    

  }

}
