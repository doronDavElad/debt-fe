import { Injectable } from '@angular/core';
import { invoicesTable } from '../../mockData/bills';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private tableData=invoicesTable

  constructor() { }
  getInvoiceData(): Observable<any[]> {
    return of(this.tableData); // Return the data as an observable
  }
}
