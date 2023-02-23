import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CatalogueService } from '../catalogue.service';
@Component({
  selector: 'app-catagoryform',
  templateUrl: './catagoryform.component.html',
  styleUrls: ['./catagoryform.component.css']
})
export class CatagoryformComponent implements OnInit {
  bookForm:FormGroup;
  
  private router: Router;
  category: {};
  data: any;
  constructor(
    public formBiulder:FormBuilder,
    
    public catService: CatalogueService,
  )
  {
    this.bookForm = this.formBiulder.group({
      
      name: [''],
      description:[''],
    imgURL:null,
    products: null
  
    })}

  ngOnInit(): void {
  }
  

  onSubmit():any{
    var A = this.bookForm.value 
    console.log(A);
    // this.catalService.uploadcat(this.bookForm.value);
  this.catService.uploadcat(A).subscribe(
    response =>{
      // console.log(user)
      console.log(response)
     
      
    },
    // error =>{
      
    //   console.log("bbbbb");
      
    // }
  );
  }
 

}
