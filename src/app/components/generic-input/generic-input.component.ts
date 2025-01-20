import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IgenericInput } from './genericInput.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generic-input',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './generic-input.component.html',
  styleUrl: './generic-input.component.scss'
})
export class GenericInputComponent {
  @Input() taskeInputs: IgenericInput[] = [];
  @Output() InputValue:EventEmitter<{value:string,index:number}>=new EventEmitter();
  @Output() optionSelected: EventEmitter<{ option: string; index: number }> = new EventEmitter(); // Add an event emitter for selecting options

  isDropdownOpen: boolean = false; 
  onChnageValue(event: Event,index:number): void {
    const {value} = event.target as HTMLInputElement;
    // console.log(value,index);
    this.InputValue.emit({ value, index });
  }
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen; // Toggle dropdown state
  }
  // selectOption(option: string,index:number): void {
  //   console.log('Selected Option:', option); 
  //   this.taskeInputs[index].value = option;
  //   this.isDropdownOpen = false;
  //   this.InputValue.emit({ value: option, index });
  // }
  selectOption(option: string, index: number): void {
    this.optionSelected.emit({ option, index });
    this.taskeInputs[index].value = option;
    this.isDropdownOpen = false;
  }

  ngOnInit(): void {
    // console.log('allData:', this.taskeInputs); 
  }

}
