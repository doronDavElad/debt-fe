import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import add from '../../../assets/images/'
@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss'
})
export class SubHeaderComponent {
tabs=[
  {
   value:'90',
   title:'חשבוניות במעקב',
   img:"assets/images/file.svg"

  },
  {
   value:'12',
   title:'נדחו ע"י הלקוח',
   img:"assets/images/file.svg"

  },
  {
   value:'23',
   title:'ללא תגובה',
   img:"assets/images/file.svg"

  },
  {
   value:'8',
   title:'עם התאמה לתקבול',
   img:"assets/images/file.svg"

  },
  {
   value:'3',
   title:'בחוב',
   img:"assets/images/file.svg"

  },
]
}
