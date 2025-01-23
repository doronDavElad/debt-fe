import { Component, Input } from '@angular/core';
import { ICustomerPageDataInterface } from '../../interfaces/customerPage.interface';

@Component({
  selector: 'app-customer-info-card',
  standalone: true,
  imports: [],
  templateUrl: './customer-info-card.component.html',
  styleUrl: './customer-info-card.component.scss'
})
export class CustomerInfoCardComponent {
  @Input() customerData:ICustomerPageDataInterface={} as ICustomerPageDataInterface

}
