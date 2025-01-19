import { Component, ViewEncapsulation } from '@angular/core';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { GenericTableComponent } from '../../components/generic-table/generic-table.component';
import { ItableValues } from '../../components/generic-table/table-interface';
import { invoicesTable } from '../../mockData/bills';
import { Itabs_sub_header } from '../../components/sub-header/subHeader_mockData';
import { IgenericInput } from '../../components/generic-input/genericInput.interface';
import { GenericInputComponent } from "../../components/generic-input/generic-input.component";

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [SubHeaderComponent, GenericTableComponent, GenericInputComponent],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class InvoicesComponent {

  tableData: any[] = invoicesTable;

  
  tableInvoiceMockData:ItableValues[]=[
    {
      controlName: 'customerId',
      type: 'text',
      title: 'קוד לקוח',
      sort:true
      
    },
    {
      controlName: 'customerName',
      type: 'text',
      title: 'לקוח',
      sort:true
    },
    {
      controlName: 'projectName',
      type: 'text',
      title: 'פרוייקט',
      sort:true
    },
    {
      controlName: 'date',
      type: 'date',
      title: 'תאריך חשבונית',
      sort:true
    },
    {
      controlName: 'billNumber',
      type: 'text',
      title: 'מספר חשבונית',
      sort:true
    },
    {
      controlName: 'secondDate',
      type: 'text',
      title: 'תאריך ערך',
      sort:true
    },
    {
      controlName: 'payAmount',
      type: 'text',
      title: 'סכום כולל מע"מ',
      sort:true
    },
    {
      controlName: 'eladEmployee',
      type: 'text',
      title: 'גורם מטפל',
      sort:true
    },
    {
      controlName: 'status',
      type: 'status',
      title: 'סטטוס',
      sort:true
    },
  ]

  handleInputOutput(emittedData:{value:string,index:number}){
    console.log(emittedData);
    

  }

  taskeInputs:IgenericInput[]=[
    {
      type:'text',
      placeHolder:'חיפוש לפי מספר חשבונית או שם לקוח',
      options:[],
      icon:'../../../assets/images/search.svg',
      value:''
    },
    {
      type:'date',
      placeHolder:'תאריך ערך',
      options:[],
      icon:'',
      value:''
    },
    {
      type:'select',
      placeHolder:'סינון:',
      options:["הכל","לא נשלחה","נשלחה","נדחתה","אושרה לתשלום",'ללא תגובה','אושרה' ,'לתשלום'],
      icon:'../../../assets/images/chevron_down.svg',
      value:''
    }
  ]
  dataToTable: Itabs_sub_header = {
    value: '',
    title: '',
    img: '',
  }; 
  onTabsDataReceived(tab: Itabs_sub_header) {
    this.dataToTable = tab; 
  }



}
