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
  isDropdownOpen: boolean = false; 
  onChnageValue(event: Event,index:number): void {
    const {value} = event.target as HTMLInputElement;
    // console.log(value,index);
    this.InputValue.emit({ value, index });
  }
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen; // Toggle dropdown state
  }
  selectOption(option: string): void {
    // this.selectedOption = option; // Update the selected option
    // this.isDropdownOpen = false; // Close the dropdown
    console.log('Selected Option:', option); // Emit or log selected option
  }
  ngOnInit(): void {
    // console.log('allData:', this.taskeInputs); 
  }

}
