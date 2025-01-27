import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Itabs_sub_header } from './subHeader_mockData';
// import add from '../../../assets/images/'
@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss'
})
export class SubHeaderComponent {

  @Output() tabsDataToTable = new EventEmitter<Itabs_sub_header>();
  selectedTab: Itabs_sub_header | null = null;

  selectTab(tab: Itabs_sub_header) {
   
    
    this.selectedTab = tab;
    this.tabsDataToTable.emit(tab); 
  }
  ngOnInit() {
    if (this.tabs.length > 0) {
      this.selectedTab = this.tabs[0];
      this.tabsDataToTable.emit(this.tabs[0]);
    }
  }
tabs:Itabs_sub_header[]=[
  {
   value:'90',
   title:'חשבוניות במעקב',
    controlName:'',
   img:"assets/images/invoice.svg",
   invoicesTyps:['all']

  },
  {
   value:'12',
   title:'נדחו ע"י הלקוח',
   controlName:'',
   img:"assets/images/invoice_deny.svg",
   invoicesTyps:['']

  },
  {
   value:'23',
   title:'ללא תגובה',
   controlName:'',
   img:"assets/images/invoice_no_comment.svg",
   invoicesTyps:['ללא תגובה']

  },
  {
   value:'8',
   title:'עם התאמה לתקבול',
   controlName:'',
   img:"assets/images/complete.svg",
   invoicesTyps:['']

  },
  {
   value:'3',
   title:'בחוב',
   controlName:'',
   img:"assets/images/dollar_sign.svg",
   invoicesTyps:['']

  },
]
}
