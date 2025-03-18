import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
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
  styleUrl: './generic-table.component.scss',
  encapsulation: ViewEncapsulation.None,
  styles: [`
  ::ng-deep .custom_tooltip {
    background-color: red !important;
    color: white !important;
    font-size: 14px !important;
  }
`]


})
export class GenericTableComponent implements OnInit {
  @Input() allData: ItableValues[] = [];
  @Input() tableData: ITableRowData[] = [];
  @Input() tabsDataToTable!: Itabs_sub_header;
  @Input() taskeInputs: IgenericInput[] = [];
  @Input() sortData: (colData: ItableValues) => void = () => {};
  @Input() currentSortColumn: string | null = null;
  formatDate = formatDate;
  @Output() openDrawer = new EventEmitter<void>();
  @Output() toggleDrawer = new EventEmitter<ITableRowData | void>();
  isTooltipVisible = true;
  openDrawerAction() {
    this.openDrawer.emit();
  }
    ngOnInit(): void {
    console.log(1234,'tabsDataToTable:', this.tabsDataToTable); 
  }
  toggleDrower(rowData:ITableRowData) {    
    console.log(rowData);
    //need to make fetch data for rowData
    
    this.toggleDrawer.emit(rowData);
  }

  isPopupVisible = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  hidePopup() {
    this.isPopupVisible = false;
  }


  
}
