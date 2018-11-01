import { Component } from '@angular/core';

@Component({
  selector: 'bm-root',
  templateUrl: 'app.component.html'
})
export class AppComponent { }


/*
  template:
    `<bm-book-list *ngIf="listOn"
      (showDetailsEvent)="showDetails($event)"></bm-book-list>
     <bm-book-details *ngIf="detailsOn"
      (showListEvent)="showList()"
     [book]="book">
     </bm-book-details>`
*/
