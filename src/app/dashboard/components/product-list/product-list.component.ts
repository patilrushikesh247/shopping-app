import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ProductService } from "../../services/product.service";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  p:any;
  @Input("productArr") productArr = [];
  @Input("role") role = 1;
  @Output() deleteEvent = new EventEmitter();
  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
  deleteProduct(id, name) {
    let bool = window.confirm(`Are you sure you want to delete ${name}`);
    if (bool) {
      this.productService.deleteProduct(id).subscribe(
        (res) => {
          this.deleteEvent.emit();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
