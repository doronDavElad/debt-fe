import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeLineComponent } from "../time-line/time-line.component";
import { IDrawerOrders } from './drawer.interface';
import { CommonModule } from '@angular/common';
import {formatDate} from '../../helpers/tableHelpers'

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [TimeLineComponent,CommonModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {
  @Input() isOpen: boolean = false;
  @Output() toggleDrawer = new EventEmitter<void>();
  @Input() drawerdata: IDrawerOrders={} as IDrawerOrders;

  formatDate(date: number) {
    return formatDate(+date);
  }

  ngOnInit(){
    console.log(this.drawerdata);
  
  }
  close() {    
    this.toggleDrawer.emit();
  }
}
