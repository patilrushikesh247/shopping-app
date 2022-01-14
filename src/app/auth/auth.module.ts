import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ForgotPassComponent } from "./components/forgot-pass/forgot-pass.component";
import { LoginService } from "./services/login.service";
import { Routes, RouterModule } from "@angular/router";
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "forgotPassword", component: ForgotPassComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPassComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoginService],
})
export class AuthModule {}
