
import { ChangeDetectorRef, Component } from '@angular/core';
import { IncoivesSummaryComponent } from "../../components/incoives-summary/incoives-summary.component";
import { IpaidInvoices } from '../../components/incoives-summary/invoices-summary.interface';
import { CustomersServiceService } from '../../services/customers-service.service';
import { InvoicesDisplayDataComponent } from "../../components/invoices-display-data/invoices-display-data.component";
import { IInvoicesTable } from '../../components/invoices-display-data/invoices-display-data.interface';
import { GenericInputComponent } from "../../components/generic-input/generic-input.component";
import { IgenericInput } from '../../components/generic-input/genericInput.interface';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [IncoivesSummaryComponent, InvoicesDisplayDataComponent, GenericInputComponent],
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

  constructor(private customerService: CustomersServiceService, private cdr: ChangeDetectorRef) {}
  
  ngOnInit(): void { 
    this.invoicesData = this.customerService.invoicesData;
    this.totalData = this.customerService.totalData;
    this.selectedTab = this.customerService.selectedTab;
    this.highestPrice = this.customerService.getHighestPrice(); 
    this.exportToExcel = this.exportToExcel.bind(this);
    setTimeout(() => {
      this.taskeInputs = [...this.taskeInputs]; 
    });
    this.cdr.detectChanges();
   
  }

  exportToExcel(): void {
    console.log(111);
    const data = this.totalData; 
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `invoices-table-${Date.now()}.xlsx`);
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
  taskeInputs:IgenericInput[]=[
    {
      type:'exel',
      placeHolder:'יצוא מידע לקובץ אקסל',
      options:[],
      icon:'../../../assets/images/exel.svg',
    },
  ]
}
