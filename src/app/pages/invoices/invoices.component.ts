import { Component } from '@angular/core';
import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';
import { GenericTableComponent } from '../../components/generic-table/generic-table.component';
import { IInputData } from '../../components/generic-table/table-interface';
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
  tableInvoiceMockData:IInputData[]=[
    {
      controlName: 'customerId',
      initialValue: null,
      type: 'text',
      title: 'קוד לקוח',
    },
    {
      controlName: 'customerName',
      initialValue: null,
      type: 'text',
      title: 'לקוח',
    },
    {
      controlName: 'projectName',
      initialValue: null,
      type: 'text',
      title: 'פרוייקט',
    },
    {
      controlName: 'date',
      initialValue: null,
      type: 'date',
      title: 'תאריך חשבונית',
    },
    {
      controlName: 'billNumber',
      initialValue: null,
      type: 'text',
      title: 'מספר חשבונית',
    },
    {
      controlName: 'secondDate',
      initialValue: null,
      type: 'text',
      title: 'תאריך ערך',
    },
    {
      controlName: 'payAmount',
      initialValue: null,
      type: 'text',
      title: 'סכום כולל מע"מ',
    },
    {
      controlName: 'eladEmployee',
      initialValue: null,
      type: 'text',
      title: 'גורם מטפל',
    },
    {
      controlName: 'status',
      initialValue: null,
      type: 'text',
      title: 'סטטוס',
    },
  ]


}
