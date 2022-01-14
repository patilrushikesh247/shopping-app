import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule ,FormsModule} from "@angular/forms";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { CustomerDashboardComponent } from "./components/customer-dashboard/customer-dashboard.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductComponent } from "./components/product/product.component";
import {  HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from 'ngx-pagination';
const routes: Routes = [
  { path: "", component: AdminDashboardComponent },
  { path: "addProduct/:action", component: ProductComponent },
  { path: "editProduct/:action/:id", component: ProductComponent },
  { path: "viewProduct/:action/:id", component: ProductComponent },
];

@NgModule({
  declarations: [
    DashboardComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    ProductListComponent,
    ProductComponent,
   
  ],
  imports: [ NgxPaginationModule,FormsModule,CommonModule,HttpClientModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class DashboardModule {}
