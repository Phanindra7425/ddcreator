import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  position: number;
  Transaction: string;
  Configuration: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements AfterViewInit {
  Transaction = 'None';
  Pgno = 0;
  pos = 0;
  displayedColumns: string[] = ['position', 'Transaction', 'Configuration'];
  dataSource: any = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  submit() {
    if (this.Pgno > 0 && this.pos > 0) {
      let result = 'YES,' + this.Pgno + ',' + this.pos;

      let value = {
        position: ELEMENT_DATA.length + 1,
        Transaction: this.Transaction,
        Configuration: result,
      };
      if (value.Transaction != 'None') {
        ELEMENT_DATA.push(value);
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      }
    }
  }
}
