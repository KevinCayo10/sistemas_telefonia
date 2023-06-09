import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from 'projects/app-gsi/src/environments/environment';

@Component({
  selector: 'gsi-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Output() onChangePage:EventEmitter<number> = new EventEmitter<number>()
  @Input() length!:number
  pageSize = environment.PAGE_SIZE
  currenPage = 0

  changePage(event:any){
    this.currenPage = event.pageIndex ?? event.value
    this.onChangePage.emit(this.currenPage)
  }
}
