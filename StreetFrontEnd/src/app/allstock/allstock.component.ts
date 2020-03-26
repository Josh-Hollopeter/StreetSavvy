import { Router } from '@angular/router';
import {  Pipe, PipeTransform ,Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allstock',
  templateUrl: './allstock.component.html',
  styleUrls: ['./allstock.component.css']
})
export class AllstockComponent implements OnInit {

  loaded: boolean = false;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<AnimationPlayState>;
  symbol = 'AAPL';
  url = 'https://financialmodelingprep.com/api/v3/company/stock/list';
  financialStatement: any = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, private router:Router) {

    this.http.get<any>(this.url).subscribe(data => {
      this.financialStatement = data.symbolsList.slice(0,500);
      this.createdDisplayComlumn(this.financialStatement[0]);

      this.dataSource = new MatTableDataSource(this.financialStatement);
      this.loaded =true;
    })
  }

  ngOnInit() {
    if(!localStorage.getItem('credentials')){
      this.router.navigateByUrl('/login');
      }
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },1000);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createdDisplayComlumn(obj) {
    Object.keys(obj).forEach((key,index)=> {
      this.displayedColumns.push(key);
    });
  }
}


