import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  public host: string = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  public getResource(url: string) { 
    return this.http.get(this.host + url).pipe(map((res:any)=>{
      return res;
    }));
  }
  public DeleteResource(url: string) { 
    return this.http.delete(this.host + url).pipe(map((res:any)=>{
      return res;
    }));
  }
  uploadcat(data: any){
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf8',
      });
    let options = { headers: headers };
        return this.http.post<any>("http://localhost:8080/api/catagory",JSON.stringify(data),options);
    
      
    }
  public getResource2(url: string) {
    return this.http.get(url);
  }
  public getResource3(url: string) {
    return this.http.get(this.host +url);
  }
  uploadPhotoProduct(file: File, idProduct): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest(
      'POST',
      this.host + '/uploadPhoto/' + idProduct,
      formdata,
      {
        reportProgress: true,
        responseType: 'text',
      }
    );

    return this.http.request(req);
  }

  public patchResource(url, data) {
    return this.http.patch(url, data);
  }
}
