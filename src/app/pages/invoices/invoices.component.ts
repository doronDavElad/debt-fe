import { Component } from '@angular/core';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { GenericTableComponent } from '../../components/generic-table/generic-table.component';
import { ItableValues } from '../../components/generic-table/table-interface';
import { invoicesTable } from '../../mockData/bills';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [SubHeaderComponent,GenericTableComponent],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.scss'
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


}
