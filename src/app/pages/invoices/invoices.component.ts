import { Component, ViewEncapsulation, signal } from '@angular/core';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { GenericTableComponent } from '../../components/generic-table/generic-table.component';
import { ITableRowData, ItableValues } from '../../components/generic-table/table-interface';
import { invoicesTable } from '../../mockData/bills';
import { Itabs_sub_header } from '../../components/sub-header/subHeader_mockData';
import { IgenericInput } from '../../components/generic-input/genericInput.interface';
import { GenericInputComponent } from "../../components/generic-input/generic-input.component";
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [SubHeaderComponent, GenericTableComponent, GenericInputComponent],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class InvoicesComponent {

  tableData = signal<ITableRowData[]>([]);
  sortedData = signal<ITableRowData[]>([]);

  currentSortColumn = signal<string | null>(null);


  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    console.log(this.tableInvoiceMockData);
    
    this.invoiceService.getInvoiceData().subscribe((data) => {
      this.tableData.set(data); 
    });
  }
  
  sortData = (colData: ItableValues): void => {
    try {
      const key = colData.controlName;
      
      if (this.currentSortColumn() === key) {
        this.sortedData.set([]);
        this.currentSortColumn.set(null);
        return;
      }
      
      const dataToSort = this.sortedData().length > 0 ? this.sortedData() : this.tableData();
      
      const newSortedData = [...dataToSort].sort((a, b) => {
        const valueA = a[key];
        const valueB = b[key];
        
        if (typeof valueA === "string" && typeof valueB === "string") {
          return valueA.localeCompare(valueB);
        } else if (typeof valueA === "number" && typeof valueB === "number") {
          return valueA - valueB;
        } else {
          return 0;
        }
      });
      
      // Update sorted data and current sort column
      this.sortedData.set(newSortedData);
      this.currentSortColumn.set(key);
      
    } catch (error) {
      console.error("Error during sorting:", error);
    }
  }
  
  
  
  
  
  
  

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
      type: 'date',
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
