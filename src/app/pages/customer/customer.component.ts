import { Component, OnInit, signal } from '@angular/core';
import { CustomerInfoCardComponent } from '../../components/customer-info-card/customer-info-card.component';
import { CustomerPageServiceService } from '../../services/customer-page-service.service';
import { ICustomerPageDataInterface, customerCardsText } from '../../interfaces/customerPage.interface';
import { ContactCardComponent } from '../../components/contact-card/contact-card.component';
import { CommonModule } from '@angular/common';
import { IgenericInput } from '../../components/generic-input/genericInput.interface';
import { ITableRowData, ItableValues } from '../../components/generic-table/table-interface';
import { GenericTableComponent } from '../../components/generic-table/generic-table.component';
import { GenericInputComponent } from '../../components/generic-input/generic-input.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule,CustomerInfoCardComponent,ContactCardComponent,GenericTableComponent,GenericInputComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {
  customerData: ICustomerPageDataInterface = {} as ICustomerPageDataInterface;
  tableData = signal<ITableRowData[]>([]);
  sortedData = signal<ITableRowData[]>([]);

  customerTableCards:customerCardsText[]=[
   {text: "חשבוניות לא מאושרות" },
   {text: "תקבולים פתוחים"},
  {text:  "חשבוניות בחוב"}]


  constructor(private customerPageService: CustomerPageServiceService) {}

  ngOnInit(): void {
    const data = this.customerPageService.customerdata();
    if (data) {
      this.customerData = data;
    } else {
    }
  }

  handleInputOutput(emittedData: { value: string, index: number }): void {
    console.log(emittedData);
  
    const searchValue = emittedData.value.toLowerCase();
  
    // If the search input is empty, reset to original tableData
    if (searchValue === "") {
      this.sortedData.set(this.tableData());
    } else {
      // Filter the data by customerName and billNumber
      const filteredData = this.tableData().filter((row) => {
        return (
          row.customerName?.toLowerCase().includes(searchValue) ||
          row.billNumber?.toLowerCase().includes(searchValue)
        );
      });
  
      // Update sortedData with filtered data
      this.sortedData.set(filteredData);
    }
  }
  
  handleOptionSelected(event: { option: string; index: number }): void {
    console.log('Option Selected:', event);
    this.taskeInputs[event.index].value = event.option;
    const selectedStatus = event.option.toLowerCase();

    const filteredData=this.tableData().filter((row)=>{
      if (selectedStatus === "הכל"){
        return this.tableData

      }
      
      return row.status?.toLowerCase()=== selectedStatus
    })
    this.sortedData.set(filteredData)
  }
  

  taskeInputs:IgenericInput[]=[
    
    {
      type:'select',
      placeHolder:'סינון:',
      options:["הכל","לא נשלחה","נשלחה","נדחתה","אושרה לתשלום",'ללא תגובה','אושרה' ,'לתשלום'],
      icon:'../../../assets/images/chevron_down.svg',
      value:''
    },
    {
      type:'text',
      placeHolder:'חיפוש לפי מספר חשבונית או שם לקוח',
      options:[],
      icon:'../../../assets/images/search.svg',
      value:''
    },
  
  ]

  tableInvoiceMockData:ItableValues[]=[
    {
      controlName: 'flag',
      type: 'flag',
      title: '',
      sort:false
      
    },
    {
      controlName: 'customerId',
      type: 'date',
      title: 'תאריך חשבונית',
      sort:true
      
    },
    {
      controlName: 'customerName',
      type: 'text',
      title: 'מספר חשבונית',
      sort:true
    },
    {
      controlName: 'projectName',
      type: 'date',
      title: 'תאריך ערך',
      sort:true
    },
    {
      controlName: 'date',
      type: 'text',
      title: 'חטיבה',
      sort:true
    },
    {
      controlName: 'billNumber',
      type: 'text',
      title: 'סכום',
      sort:true
    },
    {
      controlName: 'status',
      type: 'status',
      title: 'סטטוס',
      sort:true
    },
  ]
}
