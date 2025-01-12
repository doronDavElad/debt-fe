import { Component, Input } from '@angular/core';
import { HeaderLinksInterface } from './header-interface.interface';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from "../search-input/search-input.component"; 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchInputComponent,SearchInputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  @Input() name: string = 'headerSearch'; 
  @Input() id: string = 'headerSearch';   
  @Input() placeholder: string = 'חיפוש לקוח לפי שם או ע.מ';  


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
