import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
@Component({
  selector: "app-customer-dashboard",
  templateUrl: "./customer-dashboard.component.html",
  styleUrls: ["./customer-dashboard.component.scss"],
})
export class CustomerDashboardComponent implements OnInit {
  constructor(private productService: ProductService) {}
  productArr = [];
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (res: any) => {
        console.log(res);
        this.productArr = res.Data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
