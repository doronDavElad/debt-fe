
import { Component } from '@angular/core';
import { IncoivesSummaryComponent } from "../../components/incoives-summary/incoives-summary.component";
import { IpaidInvoices } from '../../components/incoives-summary/invoices-summary.interface';
import { CustomersServiceService } from '../../services/customers-service.service';
import { InvoicesDisplayDataComponent } from "../../components/invoices-display-data/invoices-display-data.component";
import { IInvoicesTable } from '../../components/invoices-display-data/invoices-display-data.interface';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [IncoivesSummaryComponent, InvoicesDisplayDataComponent],
  providers: [CustomersServiceService],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {
  invoicesData:IpaidInvoices[] = [];
  totalData:IpaidInvoices[] = [];
  highestPrice: number =0 ;
  selectedTab:string="נדחו"
  
  //rightTable structure
  
  //left structure

  constructor(private customerService: CustomersServiceService){
  }
  ngOnInit(): void { 
    this.invoicesData = this.customerService.invoicesData;
    this.totalData = this.customerService.totalData;
    this.selectedTab = this.customerService.selectedTab;
    this.highestPrice = this.customerService.getHighestPrice();    
  }

  totalDataStructur:IInvoicesTable[]=[
    {
      type:'text',
    },
    {
      type:'price',
    },
    {
      type:'date',
    },
    {
      type:'status',
    }
  ]
}
