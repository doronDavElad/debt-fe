import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { IpaidInvoices } from './invoices-summary.interface';
import { InvoicesDisplayDataComponent } from '../invoices-display-data/invoices-display-data.component';
import { IInvoicesTable } from '../invoices-display-data/invoices-display-data.interface';
import { CommonModule } from '@angular/common';
import { GenericInputComponent } from "../generic-input/generic-input.component";
import { IgenericInput } from '../generic-input/genericInput.interface';
import * as XLSX from 'xlsx';
import { Router, RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../../pages/customer/customer.component';

@Component({
  selector: 'app-incoives-summary',
  standalone: true,
  imports: [MatTabsModule, CommonModule, GenericInputComponent, InvoicesDisplayDataComponent,RouterModule],
  
  templateUrl: './incoives-summary.component.html',
  styleUrl: './incoives-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncoivesSummaryComponent {
  @Input() invoicesData: IpaidInvoices[] = [];
  @Input() highestPrice: number =0;
  @Input() selectedTab: string ='';
  dataToDisplay = signal<IpaidInvoices[]>([]); 
  is_active_status_filter: number = 1; 
  is_active_customer: number = 1; 
constructor(  private cdr: ChangeDetectorRef,
  private applicationRef: ApplicationRef,
  private router: Router){
  console.log(this.invoicesData);
  
}
ngOnInit(): void {
  
  this.dataToDisplay.set([...this.invoicesData]); 
  this.exportToExcel = this.exportToExcel.bind(this);

}
toggleActive(id: number,type:string): void {
  if(type==='is_active_status_filter'){

  
  this.is_active_status_filter = id;
}
if(type==='is_active_customer'){
    this.is_active_customer = id;

  }
}

tabBottomClick(id:number,type:string,status:string):void{
  // need to change filter status from tatus name in DB
  this.filterInvoicesByStatus(status)
  this.toggleActive(id,type)


}
filterInvoicesByStatus(status: string): void {
  setTimeout(() => {
    const filteredData = this.invoicesData.filter(invoice => invoice.status === status);
    console.log('Filtered data:', filteredData);
    
    this.dataToDisplay.set([...filteredData]);
    this.applicationRef.tick();
  }, 0);
}


  // onTabChange(event: any): void {
  //   const tabLabel = event.tab.textLabel;

  //   if (tabLabel === 'נדחו') {
  //     this.selectedTab=tabLabel
  //   } else if (tabLabel === 'ללא תגובה') {
  //     this.selectedTab=tabLabel
  //   } else if (tabLabel === 'בחוב') {
  //     this.selectedTab=tabLabel
  //   }

  // }

  exportToExcel(): void {
    console.log(1,this.dataToDisplay());
    
    const data = this.dataToDisplay(); 
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `invoices-table-${Date.now()}.xlsx`);
  }
  goToCustomer(name: string): void {
    console.log(111111111,name);
    this.router.navigate(['/customer']);
    }
  
  tabsTableStructure:IInvoicesTable[]=[
    {
      type:'text',
    },
    {
      type:'price',
    },
    {
      type:'graph',
    },
    {
      type:'indicator',
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
