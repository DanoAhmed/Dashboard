import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, } from 'rxjs';
import { AuthService } from '../_authentication/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private _HttpClient: HttpClient, private authSer: AuthService) { }

  /////////////////////////////////////////////////////////////////////////////////////////////

  getAllProjectsCat(): Observable<any> {
    return this._HttpClient.get(`${environment.apiUrl}/api/categories/${this.authSer.currentUserValue['data']['id']}/project`);

  }
  ////////////////////////////////////////////////////////////////////////////////////////////

  getAllProjects(id): Observable<any> {
    // console.log(this.authSer.currentUserValue['data']['api_token']);

    return this._HttpClient.get(`${environment.apiUrl}/api/projects/${this.authSer.currentUserValue['data']['id']}/${id}`);
  }


  /////////////////////////////////////////////////////////////////////////////////////////

  deleteProject(index) {
    // console.log(this.authSer.currentUserValue['data']['api_token']);

    return this._HttpClient.delete(`${environment.apiUrl}/api/projects/${this.authSer.currentUserValue['data']['id']}/${index}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authSer.currentUserValue['data']['api_token']}`,
      })
    });

  }

  /////////////////////////////////////////////////////////////////////////////////////////

  editProject(index, fd) {

    console.log(fd);
    return this._HttpClient.post(`${environment.apiUrl}/api/projects/${this.authSer.currentUserValue['data']['id']}/${index}`,
      {
        'title': fd.projectName,
        'description': fd.projectDesc,
        '_method': 'put'
      }, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authSer.currentUserValue['data']['api_token']}`,
      })
    });


  }






}
