import { Injectable, signal } from '@angular/core';
import { ICustomerPageDataInterface } from '../interfaces/customerPage.interface';
import { HttpClient } from '@angular/common/http';
import { customerpageMockData } from './../mockData/costomerPageData';

@Injectable({
  providedIn: 'root'
})
export class CustomerPageServiceService {
  customerdata = signal<ICustomerPageDataInterface | null>(customerpageMockData);

  constructor(
    // private http: HttpClient
    ) { }
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
