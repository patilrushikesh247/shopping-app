import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  productArr= [];
  //Product_ID=[];
  constructor(private httpClient: HttpClient) {}
  getProducts() {
    return this.httpClient.get(
      "http://angular.pureecosoft.com/api/product/list"
    );
  }
  setProducts(arr) {
    this.productArr=arr;
  }

  getProductById(id) {
    let text=id;
    let int = parseInt(text);
 return this.productArr.find((p)=>{
  return p.Product_ID === int;
  });
  }

  
  deleteProduct(id) {
    return this.httpClient.post(
      `http://angular.pureecosoft.com/api/product/Delete?id=${id}`,
      ""
    );
  }
  addProduct(form:FormGroup){
    let data = {
      Product_Name: form.get("productName").value,
      Product_Size: form.get("productSize").value,
      Product_Color: form.get("productColor").value,
      Product_Price: form.get("productPrice").value,
      Product_URl: form.get("productUrl").value
     
    };
    return this.httpClient.post(
      "http://angular.pureecosoft.com/api/product/Add",data
    ); 
  }
  editProduct(id,form:FormGroup){
    let data = {
      Product_ID:id,
      Product_Name: form.get("productName").value,
      Product_Size: form.get("productSize").value,
      Product_Color: form.get("productColor").value,
      Product_Price: form.get("productPrice").value,
      Product_URl: form.get("productUrl").value
     
    };
    return this.httpClient.post(
      "http://angular.pureecosoft.com/api/product/Update",data
    ); 

  }
}



