import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { map } from 'rxjs/operators';
import { Router , ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GitDataService {

  constructor(private http: HttpClient,
    private route: ActivatedRoute) { }

    getUsers() {
      return this.http.get('https://api.github.com/users').pipe(map(
        (response : Response) => {
          console.log(response);
          const data = response;
          return data;
        }
      ));
    }

    getUser(name) {
      return this.http.get('https://api.github.com/users/' + name).pipe(map(
        (response : Response) => {
          console.log(response);
          const data = response;
          return data;
        }
      ));
    }

    getRepos(name) {
      return this.http.get('https://api.github.com/users/' + name  + '/repos').pipe(map(
        (response : Response) => {
          console.log(response);
          const data = response;
          return data;
        }
      ));
    }
}
