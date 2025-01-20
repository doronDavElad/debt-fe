import { Component, Input, OnInit } from '@angular/core';
import { ITableRowData, ItableValues,  TableData } from './table-interface';
import { CommonModule } from '@angular/common';
import { Itabs_sub_header } from '../sub-header/subHeader_mockData';
import { IgenericInput } from '../generic-input/genericInput.interface';
import { GenericInputComponent } from "../generic-input/generic-input.component";
import { formatDate } from '../../helpers/tableHelpers';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-generic-table',
  standalone: true,
  imports: [CommonModule,MatTooltipModule],
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.scss'
})
export class GenericTableComponent implements OnInit {
  @Input() allData: ItableValues[] = [];
  @Input() tableData: ITableRowData[] = [];
  @Input() tabsDataToTable!: Itabs_sub_header;
  @Input() taskeInputs: IgenericInput[] = [];
  @Input() sortData: (colData: ItableValues) => void = () => {};
  @Input() currentSortColumn: string | null = null;
  formatDate = formatDate;


    ngOnInit(): void {
    // console.log('allData:', this.taskeInputs); 
  }


  
}
