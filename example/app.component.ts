/* 
 * @author RAJAN G
 */

import {Component} from '@angular/core';
import {PaginationDirective} from '../directives/pagination.directive';

@Component({
    selector: 'my-app',
    directives: [PaginationDirective],
    template: `<ng-pagination [totalItems]="totalItems" [(ngModel)]="currentPage" [maxSize]="maxSize" (pageChanged)="pageChanged($event)"
previous-text="&lsaquo;" next-text="&rsaquo;" first-text="First" last-text="Last"></ng-pagination>
<br>
<br>
<br>
<ng-pagination [totalItems]="totalItems2" [(ngModel)]="currentPage2" [maxSize]="maxSize2" (pageChanged)="pageChanged2($event)"
previous-text="&lsaquo;" next-text="&rsaquo;"></ng-pagination>
`,
})
export class AppComponent {
  public currentPage:number = 1;
  public totalItems:number = 200;
  public maxSize:number = 5;
   public currentPage2:number = 1;
  public totalItems2:number = 200;
  public maxSize2:number = 5;
    constructor() {
    }  
  public setPage(pageNo:number):void {
    this.currentPage = pageNo;    
  };

  public pageChanged(event:any):void {
    console.log('Number items per page: ' + event.itemsPerPage);
  };
 
   
  public setPage2(pageNo:number):void {
    this.currentPage = pageNo;    
  };

  public pageChanged2(event:any):void {
    console.log('Number items per page: ' + event.itemsPerPage);
  };
}
