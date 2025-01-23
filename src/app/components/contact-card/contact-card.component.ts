import { Component, Input, ViewEncapsulation, input } from '@angular/core';
import { ICustomerPageDataInterface } from '../../interfaces/customerPage.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ContactCardComponent {
  @Input() customerData:ICustomerPageDataInterface={} as ICustomerPageDataInterface
ngOnInit(){
  console.log(12,this.customerData);
  
}
}
