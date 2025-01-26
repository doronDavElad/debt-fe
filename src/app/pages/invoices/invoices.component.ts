import { Component, ViewEncapsulation, signal } from '@angular/core';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { GenericTableComponent } from '../../components/generic-table/generic-table.component';
import { ITableRowData, ItableValues } from '../../components/generic-table/table-interface';
import { invoicesTable } from '../../mockData/bills';
import { Itabs_sub_header } from '../../components/sub-header/subHeader_mockData';
import { IgenericInput } from '../../components/generic-input/genericInput.interface';
import { GenericInputComponent } from "../../components/generic-input/generic-input.component";
import { InvoiceService } from './invoice.service';
import * as XLSX from 'xlsx';
import { DrawerComponent } from "../../components/drawer/drawer.component";
import { CommonModule } from '@angular/common';
import { IDrawerOrders } from '../../components/drawer/drawer.interface';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, GenericTableComponent, GenericInputComponent, DrawerComponent],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class InvoicesComponent {

  tableData = signal<ITableRowData[]>([]);
  sortedData = signal<ITableRowData[]>([]);
  filteredData: ITableRowData[] = [];
  isOpenDrawer:boolean = false;
  currentSortColumn = signal<string | null>(null);
  drawerdata:IDrawerOrders={} as IDrawerOrders
  date: number | undefined; 
  constructor(private invoiceService: InvoiceService) {
    this.exportToExcel = this.exportToExcel.bind(this);
    this.date = Date.now(); 


  }

  ngOnInit(): void {
    console.log('isOpenDrawer on init:', this.isOpenDrawer);
    
    this.invoiceService.getInvoiceData().subscribe((data) => {
      this.tableData.set(data); 
      this.sortedData.set(data); 
    });

    this.invoiceService.getDrawerData().subscribe((data) => {
      this.drawerdata = data;  // Assign the drawer data
    });

  }
  
  toggleDrawer() {
    this.isOpenDrawer = !this.isOpenDrawer;
  }

  exportToExcel(): void {
    const data = this.sortedData(); 
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `invoices-table-${Date.now()}.xlsx`);
  }
  
  

  
 onDateChange(selectedDate: number): void {
    console.log('Selected Date in Parent:', selectedDate);
  }

  sortData = (colData: ItableValues): void => {
    try {
      const key = colData.controlName;
      
      if (this.currentSortColumn() === key) {
        this.sortedData.set(this.tableData());
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

      
      
      this.sortedData.set(newSortedData);
      this.currentSortColumn.set(key);
      
    } catch (error) {
      console.error("Error during sorting:", error);
    }
  }
  
  
  
  handleInputChange(event: { value: string; index: number }): void {
    console.log('Input Value Changed:', event);
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

  

  tableInvoiceMockData:ItableValues[]=[
    {
      controlName: 'flag',
      type: 'flag',
      title: '',
      sort:false
      
    },
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

  handleInputOutput(emittedData: { value: string, index: number }): void {
    console.log(11,emittedData);
  
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
  
  

  taskeInputs:IgenericInput[]=[
    {
      type:'exel',
      placeHolder:'יצוא מידע לקובץ אקסל',
      options:[],
      icon:'../../../assets/images/exel.svg',
    },
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
      options:["הכל","לא נשלחה","נשלחה","נדחתה","אושר לתשלום",'ללא תגובה','אושרה' ,'לתשלום'],
      icon:'../../../assets/images/chevron_down.svg',
      value:''
    },
   
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