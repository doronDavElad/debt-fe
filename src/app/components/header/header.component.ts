import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderLinksInterface } from './header-interface.interface';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from "../search-input/search-input.component"; 
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchInputComponent,SearchInputComponent,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  @Input() name: string = 'headerSearch'; 
  @Input() id: string = 'headerSearch';   
  @Input() placeholder: string = 'חיפוש לקוח לפי שם או ע.מ';  
  @Input() searchData!: string;
  @Output() searchDataChange = new EventEmitter<string>();

  toggleChevronClass(){
    if(this.imageClass==='chevron_down'){
      this.imageClass ='chevron_up'
      this.isMenuOpen = true;
    }else{
      this.imageClass ='chevron_down'
      this.isMenuOpen = false;

    }
  }
  imageClass:string='chevron_down'
  isMenuOpen: boolean = false;
  headerLinks:HeaderLinksInterface[]=[
   { name:'חשבוניות', path:"/invoices"},
   { name:'לקוחות', path:"/customers"},
  ]

}
