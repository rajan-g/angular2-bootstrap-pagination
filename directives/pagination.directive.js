System.register(["@angular/core", "@angular/forms"], function (exports_1, context_1) {
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
    var core_1, forms_1, PaginationDirective;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }
        ],
        execute: function () {
            PaginationDirective = class PaginationDirective {
                constructor(pageChangedNgModel) {
                    this.pageChangedNgModel = pageChangedNgModel;
                    this.pageChanged = new core_1.EventEmitter();
                    this.pageList = [];
                    this.pageChangedNgModel.valueAccessor = this;
                }
                ngOnInit() {
                    this.doPaging();
                }
                doPaging() {
                    this.pageList = [];
                    var i, count;
                    this.seletedPage = this.currentpage;
                    var remaining = this.totalItems % this.pageSize;
                    var totalSize = ((this.totalItems - remaining) / this.pageSize) + (remaining === 0 ? 0 : 1);
                    for (i = (this.currentpage), count = 0; i <= totalSize && count < this.pageSize; i++, count++) {
                        this.pageList.push(i);
                    }
                    //next validation
                    if (i - 1 < totalSize) {
                        this.nextItemValid = true;
                        this.nextItem = i;
                    }
                    else {
                        this.nextItemValid = false;
                    }
                    //previous validation
                    if ((this.currentpage) > 1) {
                        this.previousItemValid = true;
                        this.previousItem = (this.currentpage * this.pageSize) - 1;
                    }
                    else {
                        this.previousItemValid = false;
                    }
                }
                setCurrentPage(pageNo) {
                    this.seletedPage = pageNo;
                    this.pageChangedNgModel.viewToModelUpdate(pageNo);
                    this.pageChageListner();
                }
                firstPage() {
                    this.currentpage = 1;
                    this.pageChangedNgModel.viewToModelUpdate(1);
                    this.pageChageListner();
                    this.doPaging();
                }
                lastPage() {
                    var totalPages = (this.totalItems / this.pageSize);
                    var lastPage = (totalPages) - (totalPages % this.pageSize === 0 ? this.pageSize : totalPages % this.pageSize) + 1;
                    this.currentpage = lastPage;
                    this.pageChangedNgModel.viewToModelUpdate(lastPage);
                    this.pageChageListner();
                    this.doPaging();
                }
                nextPage(pageNo) {
                    this.currentpage = pageNo;
                    this.pageChangedNgModel.viewToModelUpdate(pageNo);
                    this.pageChageListner();
                    this.doPaging();
                }
                previousPage(pageNo) {
                    // var temp = pageNo - this.pageSize;
                    var temp = (pageNo - this.pageSize) - this.pageSize;
                    this.currentpage = temp > 0 ? temp : 1;
                    this.pageChangedNgModel.viewToModelUpdate(this.currentpage);
                    this.pageChageListner();
                    this.doPaging();
                }
                writeValue(value) {
                    if (!value && value != '0')
                        return;
                    this.setValue(value);
                }
                registerOnChange(fn) {
                    this.onChange = fn;
                }
                registerOnTouched(fn) {
                    this.onTouched = fn;
                }
                setValue(currentValue) {
                    this.currentpage = currentValue;
                    this.doPaging();
                }
                pageChageListner() {
                    this.pageChanged.emit({
                        itemsPerPage: this.currentpage
                    });
                }
            };
            __decorate([
                core_1.Input("previous-text"),
                __metadata("design:type", String)
            ], PaginationDirective.prototype, "previousText", void 0);
            __decorate([
                core_1.Input("next-text"),
                __metadata("design:type", String)
            ], PaginationDirective.prototype, "nextText", void 0);
            __decorate([
                core_1.Input("first-text"),
                __metadata("design:type", String)
            ], PaginationDirective.prototype, "firstText", void 0);
            __decorate([
                core_1.Input("last-text"),
                __metadata("design:type", String)
            ], PaginationDirective.prototype, "lastText", void 0);
            __decorate([
                core_1.Input("totalItems"),
                __metadata("design:type", Number)
            ], PaginationDirective.prototype, "totalItems", void 0);
            __decorate([
                core_1.Input("currentPage"),
                __metadata("design:type", Number)
            ], PaginationDirective.prototype, "cPage", void 0);
            __decorate([
                core_1.Input("maxSize"),
                __metadata("design:type", Number)
            ], PaginationDirective.prototype, "pageSize", void 0);
            __decorate([
                core_1.Input("boundaryLinks"),
                __metadata("design:type", Boolean)
            ], PaginationDirective.prototype, "boundaryLinks", void 0);
            __decorate([
                core_1.Output("pageChanged"),
                __metadata("design:type", Object)
            ], PaginationDirective.prototype, "pageChanged", void 0);
            PaginationDirective = __decorate([
                core_1.Component({
                    selector: 'ng-pagination[ngModel]',
                    //  directives: [NgIf, NgFor, NgClass],
                    template: `
              <ul class="pagination" >
                  <li *ngIf="previousItemValid && firstText" (click)="firstPage()"><a href="#" [innerHTML]="firstText">First</a></li>
                  <li> <a *ngIf="previousItemValid" (click)="previousPage(nextItem)" aria-label="Previous"> <span aria-hidden="true">&laquo;</span> </a> </li>
                  <li *ngFor="let pageNo of pageList" [ngClass]="{'active':seletedPage === pageNo}">
                      <a (click)="setCurrentPage(pageNo)">{{pageNo}}</a>
                  </li>                
                  <li> <a  *ngIf="nextItemValid" (click)="nextPage(nextItem)" aria-label="Next"> <span aria-hidden="true">&raquo;</span> </a> </li>
                  <li><a *ngIf="nextItemValid && lastText" (click)="lastPage()" [innerHTML]="lastText" >Last</a></li>
                </ul>

`
                }),
                __metadata("design:paramtypes", [forms_1.NgModel])
            ], PaginationDirective);
            exports_1("PaginationDirective", PaginationDirective);
        }
    };
});
//# sourceMappingURL=pagination.directive.js.map