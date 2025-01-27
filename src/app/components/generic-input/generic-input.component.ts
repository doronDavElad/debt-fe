import { CommonModule, getLocaleMonthNames, registerLocaleData } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IgenericInput } from './genericInput.interface';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { LOCALE_ID } from '@angular/core';
import localeHe from '@angular/common/locales/he';
import { PrimeNGConfig } from 'primeng/api'; // Add this import

registerLocaleData(localeHe)
@Component({
  selector: 'app-generic-input',
  standalone: true,
  imports: [CommonModule,FormsModule,CalendarModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'he' } 
  ],
  templateUrl: './generic-input.component.html',
  styleUrl: './generic-input.component.scss'
})
export class GenericInputComponent {
  @Input() taskeInputs: IgenericInput[] = [];
  @Output() InputValue:EventEmitter<{value:string,index:number}>=new EventEmitter();
  @Output() optionSelected: EventEmitter<{ option: string; index: number }> = new EventEmitter();
  @Output() dateChange: EventEmitter<number> = new EventEmitter();
  @Input() exportToExcel: () => void = () => {};
  @Input() date: number | undefined;
  minDate: Date;
  isDropdownOpen: boolean = false; 
  
  constructor(private primeNGConfig: PrimeNGConfig) {
    this.minDate = new Date();
    this.primeNGConfig.setTranslation({
      monthNames: [
        "ינואר", "פברואר", "מרץ", "אפריל", 
        "מאי", "יוני", "יולי", "אוגוסט", 
        "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"
      ],
      monthNamesShort: [
        "ינואר", "פברואר", "מרץ", "אפריל", 
        "מאי", "יוני", "יולי", "אוגוסט", 
        "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"
      ]
    });
  }



  

onDateChange(selectedDate: Date[]): void {
  console.log(selectedDate);
  
  
  if (selectedDate && selectedDate.length > 0 && selectedDate[0]) {
    const timestamp = selectedDate[0].getTime();
    this.dateChange.emit(timestamp); 
    console.log('Selected Date in Child (Timestamp):', timestamp);
  } else {
    console.warn('No valid date selected');
  }
}

  onChnageValue(event: Event,index:number): void {
    const {value} = event.target as HTMLInputElement;
    this.InputValue.emit({ value, index });
  }
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen; 
  }
  selectOption(option: string, index: number): void {
    this.optionSelected.emit({ option, index });
    this.taskeInputs[index].value = option;
    this.isDropdownOpen = false;
  }

  ngOnInit(): void {
    // console.log('allData:', this.taskeInputs); 
  }

}
