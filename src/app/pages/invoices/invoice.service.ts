import { Injectable } from '@angular/core';
import { invoicesTable } from '../../mockData/bills';
import { Observable, of } from 'rxjs';
import { drower_data } from '../../components/drawer/drawer_mockData';
import { IDrawerOrders } from '../../components/drawer/drawer.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private tableData=invoicesTable
  drawerData:IDrawerOrders=drower_data

  
  constructor() { }
  getInvoiceData(): Observable<any[]> {
    return of(this.tableData); 
  }
  
  getDrawerData(): Observable<IDrawerOrders> {
    return of(this.drawerData); // Return the drawer data as an observable
  }
}
