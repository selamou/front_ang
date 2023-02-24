import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { CategoryService } from '../services/category.service';
import { CaddyService } from '../services/caddy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {
  role: string[];
  categories;
  constructor(
    private router: Router,
    public catService: CatalogueService,
    public authService: CategoryService,
    public caddyService: CaddyService
  ) {}

  ngOnInit(): void {
    this.getCategories();

  }
   getCategories() {
    this.catService.getResource('/categories').subscribe(
      (data) => {
        this.categories = data;
        console.log( this.categories);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  delete(id: any){
    this.catService.DeleteResource('/catagory/'+id);
    this.router.navigateByUrl('/category');

    
  }
  gotoadd(){
    this.router.navigateByUrl('/categoryadd');
  }
}
