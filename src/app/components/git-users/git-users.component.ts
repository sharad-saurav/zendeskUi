import { Component, OnInit, ViewChild } from '@angular/core';
import { GitDataService } from '../../services/git-data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {
  displayedColumns: string[] = ['login', 'type', 'site_admin', 'url', 'actions'];
  dataSource: MatTableDataSource < Element[] > ;
  gitUsers:any = [];
  gitUser:any = {};
  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private gitDataService:GitDataService, private _router: Router) { }

  ngOnInit() {
    this.gitDataService.getUsers()
        .subscribe(
        (event: any) => { 
          this.dataSource = new MatTableDataSource(event);
          this.dataSource.paginator = this.paginator;
          },
        (error)  => console.log(error)
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  search(name){
    this.gitDataService.getUser(name.value)
        .subscribe(
        (data: any) => { 
            this.gitUser = data;   
            console.log(this.gitUser);          
          },
        (error)  => console.log(error)
    );
  }

  gotoRepo(name){
    console.log(name);
    this._router.navigate( ['/userRepo', name ], {});
  }

  getUser(name){
    this.gitDataService.getUser(name)
        .subscribe(
        (data: any) => { 
            this.gitUser = data;   
            console.log(this.gitUser);          
          },
        (error)  => console.log(error)
    );
  }
}
