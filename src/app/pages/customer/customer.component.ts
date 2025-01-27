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
  currentSortColumn = signal<string | null>(null);
  uniqueProjects: string[] = [];
  activeTab:string=''
  customerTableCards:customerCardsText[]=[
   {text: "חשבוניות לא מאושרות" },
   {text: "תקבולים פתוחים"},
  {text:  "חשבוניות בחוב"}]


  constructor(private customerPageService: CustomerPageServiceService) {}

  ngOnInit(): void {
    console.log(111,this.customerData);
    
    const data = this.customerPageService.customerdata()?.all_invoices;
    const pageData = this.customerPageService.customerdata();
  
    if(pageData){
      this.customerData=(pageData)
    }
    if (data) {
      this.sortedData.set(data); 
      this.tableData.set(data)
      this.uniqueProjects = [...new Set(this.sortedData().map((item: any) => item['project']).filter(Boolean))];

      console.log(11,this.customerData);
    }
     else {
    }
  }

  handleInputOutput(emittedData: { value: string, index: number }): void {
    console.log(emittedData);
  
    const searchValue = emittedData.value.toLowerCase();
  
    if (searchValue === "") {
      this.sortedData.set(this.tableData());
    } else {
      const filteredData = this.tableData().filter((row) => {
        return (
          row.customerName?.toLowerCase().includes(searchValue) ||
          row.billNumber?.toLowerCase().includes(searchValue)
        );
      });
  
      this.sortedData.set(filteredData);
    }
  }
  
  selectProject(projectNum: string): void {
    if(projectNum==='הכל'){
      this.activeTab=''
      this.sortedData.set(this.tableData());
        } 
        else{
this.activeTab=projectNum
          const filteredData = this.tableData().filter((item: any) => item['project'] === projectNum);
          return this.sortedData.set(filteredData);
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
  
  sortData = (colData: ItableValues): void => {
    console.log(this.tableData());
    
  try {
    const key = colData.controlName;

    if (this.currentSortColumn() === key) {
      
      this.sortedData.set(this.tableData());
      this.currentSortColumn.set(null);
      return;
    }

    // Sort the data
    console.log(1,this.tableData());
    
    const dataToSort = [...this.tableData()];
    const newSortedData = dataToSort.sort((a, b) => {
      
      const valueA = a[key];
      const valueB = b[key];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return valueA.localeCompare(valueB);
      } else if (typeof valueA === 'number' && typeof valueB === 'number') {
        return valueA - valueB;
      }
      return 0;
    });

    this.sortedData.set(newSortedData);
    this.tableData.set(newSortedData);
    this.currentSortColumn.set(key);
  } catch (error) {
    console.error('Error during sorting:', error);
  }
};


  taskeInputs:IgenericInput[]=[
    
    {
      type:'select',
      placeHolder:'סינון:',
      options:["הכל","לא נשלחה","נשלחה","נדחתה","אושר לתשלום",'ללא תגובה','אושרה' ,'לתשלום'],
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
      type: 'date',
      title: 'תאריך ערך',
      sort:true
    },
    {
      controlName: 'group',
      type: 'text',
      title: 'חטיבה',
      sort:true
    },
    {
      controlName: 'payAmount',
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
