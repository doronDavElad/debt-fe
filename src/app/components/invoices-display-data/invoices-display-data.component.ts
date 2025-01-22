import { Component, Input, input } from '@angular/core';
import { IpaidInvoices } from '../incoives-summary/invoices-summary.interface';
import { CommonModule } from '@angular/common';
import { IInvoicesTable } from './invoices-display-data.interface';
import { formatDate } from '../../helpers/tableHelpers';

@Component({
  selector: 'app-invoices-display-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoices-display-data.component.html',
  styleUrl: './invoices-display-data.component.scss'

})
export class InvoicesDisplayDataComponent {
  @Input() invoicesData: IpaidInvoices[] = [];
  @Input() highestPrice: number = 0;
  @Input() TableStructure: IInvoicesTable[] = [];
  totalPages:number=0
  currentPage:number=1
  itemsPerPage: number = 10;
  dataToDisplay: IpaidInvoices[] = []; 
  ngOnInit(){
    this.getTotalOfPages(this.invoicesData);
    this.updateDisplayedInvoices();
    }

  getTotalOfPages(data:IpaidInvoices[]):void{
    this.totalPages = Math.ceil(data.length / 10);  

  }

  pagination(action: string): void {
    
    if (action === 'next' && this.currentPage < this.totalPages) {
      console.log(1);
      this.currentPage++;
      console.log(2);
      this.updateDisplayedInvoices();
      return; // Exit early to prevent the second block from running
    }
    
    if (action === 'prev' && this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedInvoices();
    }
  }

  updateDisplayedInvoices(): IpaidInvoices[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    if (this.currentPage === this.totalPages && this.invoicesData.length % this.itemsPerPage !== 0) {
      this.dataToDisplay = this.invoicesData.slice(-this.itemsPerPage);
    } else {
      const endIndex = startIndex + this.itemsPerPage;
      this.dataToDisplay = this.invoicesData.slice(startIndex, endIndex);
    }
    return this.dataToDisplay;
  }


 getGraphWidth(totalAmount:string){
  const amount = parseFloat(totalAmount);
  const percentage = (amount / this.highestPrice) * 100;
    return percentage + '%';
 }

 formatDateForTemplate(date: number) {
  return formatDate(date);
}

}
