import { Component, Input, SimpleChanges, input, signal } from '@angular/core';
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
  dataToDisplay = signal<IpaidInvoices[]>([]);  
  ngOnInit(): void {
    console.log(99, this.dataToDisplay());
    if (this.invoicesData && this.invoicesData.length > 0) {
      // Set the signal with the data
      this.dataToDisplay.set([...this.invoicesData]);  // Make sure data is copied
      this.getTotalOfPages(this.invoicesData);  // Get the total pages
      this.updateDisplayedInvoices();  // Update the invoices based on pagination
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Handle the input change for invoicesData
    if (changes['invoicesData']) {
      console.log('Invoices Data Changed:', this.invoicesData);
      this.dataToDisplay.set([...this.invoicesData]); 
      this.getTotalOfPages(this.invoicesData);  
      this.updateDisplayedInvoices(); 
    }
  }

  getTotalOfPages(data:IpaidInvoices[]):void{
    this.totalPages = Math.ceil(data.length / 10);  

  }

  pagination(action: string): void {
    console.log('Current Page:', this.currentPage, 'Total Pages:', this.totalPages);
    if (action === 'next' && this.currentPage < this.totalPages) {
      this.currentPage++;
      console.log('Next Page:', this.currentPage);
      this.updateDisplayedInvoices();
    }
  
    if (action === 'prev' && this.currentPage > 1) {
      this.currentPage--;
      console.log('Previous Page:', this.currentPage);
      this.updateDisplayedInvoices();
    }
  }
  

  updateDisplayedInvoices(): IpaidInvoices[] {
    const invoicesData = this.dataToDisplay();  
  
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  
    if (this.currentPage === this.totalPages && invoicesData.length % this.itemsPerPage !== 0) {
      this.dataToDisplay.set(invoicesData.slice(-this.itemsPerPage)); 
    } else {
      const endIndex = startIndex + this.itemsPerPage;
      this.dataToDisplay.set(invoicesData.slice(startIndex, endIndex));
    }
  
    return this.dataToDisplay();
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
