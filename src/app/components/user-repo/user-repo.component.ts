import { Component, OnInit, ViewChild } from '@angular/core';
import { GitDataService } from '../../services/git-data.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'private', 'url'];
  dataSource: MatTableDataSource < Element[] > ;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private route: ActivatedRoute, private gitDataService:GitDataService) { }

  ngOnInit() {
    const name = this.route.snapshot.params['name']
    console.log(name);
    this.gitDataService.getRepos(name)
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

}
