import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../services/product.service";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  title = "";
  errorMessage: string = "";
  apiFlag: boolean = false;
  apiSpinner: boolean = false;
  apiSuccess: boolean = false;
  apiUpdateSuccess: boolean = false;
  ProductForm: FormGroup;
  currentProduct;
  constructor(private activatedroute: ActivatedRoute, private router: Router, private productService:ProductService) {}

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params) => {
      const id = params["id"];
      const action = params["action"];
      if (action == "add") {
        this.title = "Add";
      } else if (action == "edit") {
        this.title = "Edit";
      this.currentProduct = this.productService.getProductById(id);
      //console.log(this.currentProduct);
      
        } else {
        this.title = "View";
              this.currentProduct = this.productService.getProductById(id);
      //console.log(this.currentProduct);
      }

     
    });

    this.ProductForm = new FormGroup({
      productName: new FormControl({value:this.currentProduct.Product_Name,disabled:this.title == "View"?true:false}, [
        Validators.required,
        Validators.minLength(3),
      ]),
      productSize: new FormControl({value:this.currentProduct.Product_Size,disabled:this.title == "View"?true:false}, [
        Validators.required,
        Validators.minLength(1),
      ]),
     
      productColor: new FormControl({value:this.currentProduct. Product_Color,disabled:this.title == "View"?true:false}, [
        Validators.required,
        Validators.minLength(2),
      ]),
      
      productPrice: new FormControl({value:this.currentProduct. Product_Price,disabled:this.title == "View"?true:false}, [
        Validators.required,
        Validators.minLength(2),
      ]),
      
      productUrl: new FormControl({value:this.currentProduct. Product_URl,disabled:this.title == "View"?true:false}, [
        Validators.required,
        Validators.minLength(2),
      ])
     
    });
  }
  submitForm() {
    this.ProductForm.markAllAsTouched();
    if (this.ProductForm.invalid) {
      return;
    }
    this.apiSpinner = true;

    if(this.title=="Edit"){
      this.productService.editProduct(this.currentProduct.Product_ID,this.ProductForm).subscribe(
        (res: any) => {
          console.log(res);
          this.apiSpinner = false;
          this.apiFlag = true;
          this.apiSuccess = res.Status ? true : false;
          this.errorMessage = res.Message;
        },
        (err) => {
          console.log(err);
        }
      );

    }
    else{
this.productService.addProduct(this.ProductForm).subscribe(
      (res: any) => {
        console.log(res);
        this.apiSpinner = false;
        this.apiFlag = true;
        this.apiSuccess = res.Status ? true : false;
        this.errorMessage = res.Message;
      },
      (err) => {
        console.log(err);
      }
    );
    }
    
    console.log(this.ProductForm);
  }
  clearFun() {
    this.ProductForm.reset();
  }
}
