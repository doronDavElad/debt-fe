import { Injectable } from '@angular/core';
import { TableData } from './table-interface';

@Injectable({
  providedIn: 'root',
})
export class TableServiceService {
  constructor() {}

  // Method to get table titles and data mapping
  getTableMapping(): TableData {
    return {
      tabletitles: [
        {
          type: 'string',
          title: 'קוד לקוח',
          sort: false,
          data: 'customerId',
        },
        {
          type: 'string',
          title: 'לקוח',
          sort: true,
          data: 'companyName',
        },
        {
          type: 'string',
          title: 'פרוייקט',
          sort: false,
          data: 'projectName',
        },
        {
          type: 'date',
          title: 'תאריך חשבונית',
          sort: true,
          data: 'date',
        },
        {
          type: 'string',
          title: 'מספר חשבונית',
          sort: false,
          data: 'billNumber',
        },
        {
          type: 'date',
          title: 'תאריך ערך',
          sort: false,
          data: 'secondDate',
        },
        {
          type: 'number',
          title: 'סכום כולל מע"מ',
          sort: false,
          data: 'payAmount',
        },
        {
          type: 'string',
          title: 'גורם מטפל',
          sort: false,
          data: 'eladEmployee',
        },
        {
          type: 'string',
          title: 'סטטוס',
          sort: true,
          data: 'status',
        },
      ],
      tableData: [], // Initialize empty, will be filled with actual data
    };
  }
}
