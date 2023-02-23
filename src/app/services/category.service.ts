import { CatalogueService } from './../catalogue.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CategoryService  implements OnInit {
    public categorytList : any ;
  constructor(private http: HttpClient, private catService:CatalogueService) {
  }
    ngOnInit(): void {
        // this.getCategory();
    }
  




 

}
