import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { StorageService } from "../../../services/storage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private storageService: StorageService,
    private router: Router
  ) {}
  productArr = [];
  loggedInUser;
  searchTxt ='';
  filteredArr=[];
  ngOnInit(): void {
    this.loggedInUser = this.storageService.getUser();
    this.getProductList();
  }
  getProductList() {
    this.productService.getProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.productArr = res.Data;
        this.filteredArr=res.Data;
        this.productService.setProducts(res.Data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  searchProduct(){
    this.filteredArr= this.productArr.filter(
      (prod) => prod.Product_Name.indexOf( this.searchTxt) > -1
      );
       console.log(this.productArr);
  }
  logout() {
    this.storageService.removeUser();
    this.router.navigate(["/"]);
  }
}
