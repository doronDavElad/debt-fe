import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeLineComponent } from "../time-line/time-line.component";
import { IDrawerOrders } from './drawer.interface';
import { CommonModule } from '@angular/common';
import {formatDate} from '../../helpers/tableHelpers'
import { CustomerPageServiceService } from '../../services/customer-page-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [TimeLineComponent,CommonModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {
  @Input() isOpen: boolean = false;
  @Output() toggleDrawer = new EventEmitter<void>();
  @Input() drawerdata: IDrawerOrders={} as IDrawerOrders;
  dataToFetch: any = {}; 
  isOptionsOpen: boolean = false;
  isOpenEladContact: boolean = false;
  isContactBoxOpen: number | null = null; 

  constructor(private customerPageService: CustomerPageServiceService,
    private router: Router
    ) {}

  setCustomerData(): void {
    if (this.drawerdata && this.drawerdata) {
      this.dataToFetch = this.drawerdata;
      console.log('Customer Data from Drawer:', this.dataToFetch);

      // Set customer data in the service when button is clicked
      this.customerPageService.dataToFetch.set(this.drawerdata);
      // console.log('Customer Data set in service:', this.customerPageService.customerdata());
    }
    this.router.navigate(['/customer']);  }

  openContactBox(index: number): void {
    this.isContactBoxOpen = this.isContactBoxOpen === index ? null : index;
  }
  openEladContact(): void {
    console.log(111);
    
    this.isOpenEladContact = !this.isOpenEladContact;
  }
  openPopup(): void {
    this.isOptionsOpen = !this.isOptionsOpen;
  }

  formatDate(date: number) {
    return formatDate(+date);
  }

  ngOnInit(){
    console.log(this.drawerdata);
  
  }
  close() {    
    this.toggleDrawer.emit();
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  }
}
