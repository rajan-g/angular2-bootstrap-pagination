/*
 * @author RAJAN G
 */
System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {/*
             * @author RAJAN G
             */
            AppComponent = class AppComponent {
                constructor() {
                    this.currentPage = 1;
                    this.totalItems = 12;
                    this.maxSize = 3;
                    this.currentPage2 = 1;
                    this.totalItems2 = 200;
                    this.maxSize2 = 5;
                }
                setPage(pageNo) {
                    this.currentPage = pageNo;
                }
                ;
                pageChanged(event) {
                    console.log('Number items per page: ' + event.itemsPerPage);
                }
                ;
                setPage2(pageNo) {
                    this.currentPage = pageNo;
                }
                ;
                pageChanged2(event) {
                    console.log('Number items per page: ' + event.itemsPerPage);
                }
                ;
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: `test
<div *ngIf="totalItems >0">
<ng-pagination [totalItems]="totalItems" [(ngModel)]="currentPage" [maxSize]="maxSize" (pageChanged)="pageChanged($event)"
previous-text="&lsaquo;" next-text="&rsaquo;" first-text="First" last-text="Last"></ng-pagination>
</div>
<br>
<br>
<br>\
<div *ngIf="totalItems2 >0">
<ng-pagination [totalItems]="totalItems2" [(ngModel)]="currentPage2" [maxSize]="maxSize2" (pageChanged)="pageChanged2($event)"
previous-text="&lsaquo;" next-text="&rsaquo;"></ng-pagination>
</div>
`,
                }),
                __metadata("design:paramtypes", [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map