import { Injectable, SimpleChanges, effect, signal } from '@angular/core';
import { ICustomerPageDataInterface } from '../interfaces/customerPage.interface';
import { HttpClient } from '@angular/common/http';
import { customerpageMockData } from './../mockData/costomerPageData';

@Injectable({
  providedIn: 'root'
})
export class CustomerPageServiceService {
  customerdata = signal<ICustomerPageDataInterface | null>(customerpageMockData);
  dataToFetch = signal<{} | null>(customerpageMockData);


  constructor() {
    // private http: HttpClient
    effect(() => {
      const currentCustomerData = this.customerdata();
      console.log('Customer data updated:', currentCustomerData);  // Log each update
    });
  }
    
   
  // ngOnInit(){
  //   this.customerdata.set(customerpageMockData); 
  // }

  // fetchCustomerData(url: string): void {
  //   this.http.get<ICustomerPageDataInterface>(url).subscribe({
  //     next: (data) => {
  //       this.customerdata.set(data); 
  //       console.log('data from fetch',data);
  //     },
  //     error: (err) => {
  //       console.error(err);
  //     },
  //   });
  // }
}
