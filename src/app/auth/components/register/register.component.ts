import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { confirmPasswordValidator } from "../../validators/confirmPassVaidator";
import { LoginService } from "../../services/login.service";
import { IRegistrationRes } from "../../interfaces/registeration";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  errorMessage: string = "";
  apiFlag: boolean = false;
  apiSpinner: boolean = false;
  apiSuccess: boolean = false;
  RegisterForm: FormGroup;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.RegisterForm = new FormGroup({
      userName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl("", []),
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.email,
      ]),
      dob: new FormControl("", [Validators.required]),
      telephone: new FormControl("", [
        Validators.required,
        Validators.min(1000000000),
        Validators.max(9999999999),
      ]),
      role: new FormControl("", [Validators.required]),
    });
    this.setValidator();
  }
  setValidator() {
    this.RegisterForm.controls["confirmPassword"].setValidators([
      Validators.required,
      Validators.minLength(6),
      confirmPasswordValidator(this.RegisterForm.get("password").value),
    ]);
  }
  submitForm() {
    this.RegisterForm.markAllAsTouched();
    if (this.RegisterForm.invalid) {
      return;
    }
    this.apiSpinner = true;
    this.loginService.getRegistration(this.RegisterForm).subscribe(
      (res: IRegistrationRes) => {
        this.apiSpinner = false;
        this.apiFlag = true;
        this.apiSuccess = res.Status ? true : false;
        this.errorMessage = res.Message;
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.RegisterForm);
  }
  clearFun() {
    this.RegisterForm.reset();
  }
}
