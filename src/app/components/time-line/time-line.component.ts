import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { timeLine } from './timeLine.interface';

@Component({
  selector: 'app-time-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.scss'
})
export class TimeLineComponent {
  timelineData :timeLine[]= [
    { date: 'אתמול 14:48', log_title: 'אישור ע״י הלקוח' },
    { date: 'יום שני', log_title: 'תזכור על מועד לתשלום' },
    { date: '12:00 am', log_title: 'דחייה ע״י הלקוח' ,sub_log:["התקבל מ-pola@bgu.co.il","שלום, לפי ההסכם חיוב על שעות נוספות נעשה לפי תעריף 350 ש״ח לשעת עבודה. יש טעות בחשבונית. לבדיקתכם."] },
    { date: '9:00 am', log_title: 'Repeat' },
  ];
}
