import { Component, signal } from '@angular/core';
import { IgenericInput } from '../../components/generic-input/genericInput.interface';
import { ITableRowData, ItableValues } from '../../components/generic-table/table-interface';
import { ArchiveService } from '../../services/archive.service';
import * as XLSX from 'xlsx';
import { CommonModule } from '@angular/common';
import { GenericInputComponent } from '../../components/generic-input/generic-input.component';
import { GenericTableComponent } from '../../components/generic-table/generic-table.component';
import { Itabs_sub_header } from '../../components/sub-header/subHeader_mockData';

@Component({
  selector: 'app-archive-page',
  standalone: true,
  imports: [CommonModule,GenericInputComponent,GenericTableComponent],
  templateUrl: './archive-page.component.html',
  styleUrl: './archive-page.component.scss'
})
export class ArchivePageComponent {
  title:string="ארכיון חשבוניות "
  sortedData = signal<ITableRowData[]>([]);
  tableData = signal<ITableRowData[]>([]);
  date: number | undefined; 
  selectedDate: any ; 
  currentSortColumn = signal<string | null>(null);
  isOpenDrawer:boolean = false;
  drawerDataToFetch={}


  constructor(private archiveService: ArchiveService) {
    this.exportToExcel = this.exportToExcel.bind(this);
    this.date = Date.now(); 


  }
  sortByDate(date: number): void {
    console.log('Selected Date in Parent:', date);
  }

  ngOnInit(): void {
    // console.log('isOpenDrawer on init:', this.isOpenDrawer);
    this.archiveService.getInvoiceData().subscribe((data) => {
      this.tableData.set(data); 
      this.sortedData.set(data); 
    });

    this.archiveService.getDrawerData().subscribe((data) => {
      // this.drawerdata = data;  
    });

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
  handleInputOutput(emittedData: { value: string, index: number }): void {
  
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

  exportToExcel(): void {
    const data = this.sortedData(); 
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, `invoices-table-${Date.now()}.xlsx`);
  }
  
  toggleDrawer(data?:any) {
    console.log(11,data);
    
    this.isOpenDrawer = !this.isOpenDrawer;
    if (data) {
      this.drawerDataToFetch = data;
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

  tableMockData:ItableValues[]=[
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

  dataToTable: Itabs_sub_header = {
    id:1,
    value: '',
    title: '',
    img: '', 
    invoicesTyps:[]
  }; 

}
