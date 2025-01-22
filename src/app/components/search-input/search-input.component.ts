import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {

  @Input() name: string = ''; 
  @Input() id: string = '';   
  @Input() placeholder: string = ''; 
  private _searchData: string = ''

  @Input()
  set searchData(value: string) {
    this._searchData = value;
  }
  @Output() searchDataChange = new EventEmitter<string>();



  get searchData(): string {
    return this._searchData;
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value;

    this.searchDataChange.emit(newValue);
  }




}
