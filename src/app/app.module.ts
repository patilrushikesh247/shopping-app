import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TokenInterceptor } from "./intercepters/token.interceptor";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { StorageService } from "./services/storage.service";
import { AuthGuard } from "./guard/auth.guard";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  // providers: [
  //   StorageService,
  //   AuthGuard,
  //   { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
