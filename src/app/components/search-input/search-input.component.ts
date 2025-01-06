import { Component, Input } from '@angular/core';
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

  logValue(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value);  
  }

}
