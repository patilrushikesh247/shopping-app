import { Component, OnInit } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";
import { StorageService } from "../../../services/storage.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  password = "";
  userName = "";
  constructor(
    private loginService: LoginService,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  loginFun(f: NgForm) {
    f.form.markAllAsTouched();
    if (f.invalid) {
      return;
    }
    this.loginService.getLogin(f).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Status) {
          this.storageService.setUser(response.Data);
          this.router.navigate(["/dashboard"]);
        } else {
          alert(response.Message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  clearFun(f: NgForm) {
    f.reset();
  }
}
