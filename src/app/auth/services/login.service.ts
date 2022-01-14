import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { IRegistrationParam } from "../interfaces/registeration";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  getLogin(form) {
    let data = {
      UserEmail: form.value.userName,
      UserPassword: form.value.password,
    };

    const headers = new HttpHeaders({
      "My-Custom-Header": "foobar",
    });

    return this.httpClient.post(
      "http://angular.pureecosoft.com/api/user/Login",
      data,
      { headers }
    );
  }

  getRegistration(form: FormGroup) {
    let data: IRegistrationParam = {
      UserName: form.get("userName").value,
      UserEmail: form.get("email").value,
      UserPassword: form.get("password").value,
      UserDOB: form.get("dob").value,
      UserMobile: form.get("telephone").value,
      UserRole: form.get("role").value,
    };
    return this.httpClient.post(
      "http://angular.pureecosoft.com/api/user/Registration",
      data
    );
  }
}
