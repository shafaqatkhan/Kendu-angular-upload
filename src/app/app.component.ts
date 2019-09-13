import { Component } from '@angular/core';
import {FileRestrictions} from '@progress/kendo-angular-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kendo-ui-angular';
  myRestrictions : FileRestrictions = {
    allowedExtensions : ['.pdf','.png','.jpg','.xls','.csv'],
    maxFileSize : 100
  }
}
