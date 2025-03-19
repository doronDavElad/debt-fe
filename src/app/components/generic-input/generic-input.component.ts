import { CommonModule, getLocaleMonthNames, registerLocaleData } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgenericInput } from './genericInput.interface';
import { FormsModule } from '@angular/forms';
// import { CalendarModule } from 'primeng/calendar';
import { LOCALE_ID } from '@angular/core';
import localeHe from '@angular/common/locales/he';
// import { PrimeNGConfig } from 'primeng/api'; // Add this import
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {ChangeDetectionStrategy} from '@angular/core';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { OverlayModule } from '@angular/cdk/overlay';
import '@angular/common/locales/global/he';

registerLocaleData(localeHe)

export const HEBREW_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY'
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};


@Component({
  selector: 'app-generic-input',
  standalone: true,
  imports: [CommonModule,FormsModule,MatDatepickerModule,MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule,OverlayModule],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'he-IL' },
    { provide: MAT_DATE_FORMATS, useValue: HEBREW_DATE_FORMATS },
    provideNativeDateAdapter()
  ],
  templateUrl: './generic-input.component.html',
  styleUrl: './generic-input.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class GenericInputComponent {
  @Input() taskeInputs: IgenericInput[] = [];
  @Output() InputValue:EventEmitter<{value:string,index:number}>=new EventEmitter();
  @Output() sortByDate:EventEmitter<{value:string}>=new EventEmitter();
  @Output() optionSelected: EventEmitter<{ option: string; index: number }> = new EventEmitter();
  @Output() dateChange: EventEmitter<number> = new EventEmitter();
  @Input() exportToExcel: () => void = () => {};
  @Input() date: number | undefined;
  selectedDate: Date | null = null; 
  // minDate: Date;
  isDropdownOpen: boolean = false;
  
  @ViewChild('picker') picker!: MatDatepicker<any>; 
  @ViewChild('dateInputContainer') container!: ElementRef;

  ngAfterViewInit() {
    this.picker.openedStream.subscribe(() => {
      // Find the datepicker's content panel in the overlay container
      setTimeout(() => {
        const datepickerContent = document.querySelector('.mat-datepicker-content');
        if (datepickerContent && this.container) {
          // Move it from overlay container to your own container
          this.container.nativeElement.appendChild(datepickerContent);
          // Apply fixed positioning
          (datepickerContent as HTMLElement).style.position = 'absolute';
          (datepickerContent as HTMLElement).style.top = '40px';
          (datepickerContent as HTMLElement).style.left = '0';
          (datepickerContent as HTMLElement).style.zIndex = '1000';
        }
      }, 0);
    });
  }
    
  // constructor(private primeNGConfig: PrimeNGConfig) {
  //   this.minDate = new Date();
  //   this.primeNGConfig.setTranslation({
  //     monthNames: [
  //       "ינואר", "פברואר", "מרץ", "אפריל", 
  //       "מאי", "יוני", "יולי", "אוגוסט", 
  //       "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"
  //     ],
  //     monthNamesShort: [
  //       "ינואר", "פברואר", "מרץ", "אפריל", 
  //       "מאי", "יוני", "יולי", "אוגוסט", 
  //       "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"
  //     ]
  //   });
  // }

  onDateChange(date: Date): void {
    console.log('Selected Date:', date);
    // Additional logic when the date is changed
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
