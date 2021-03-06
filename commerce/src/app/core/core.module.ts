import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './navi/navi.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import {JwtModule} from '@auth0/angular-jwt';
import {AuthService} from "./shared/auth.service";
import { SignupComponent } from './signup/signup.component';
import {CartService} from "./shared/cart.service";
import {DrawerService} from "./shared/drawer.service";
import {ProductService} from "./shared/product.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    JwtModule.forRoot({
      config : {
        tokenGetter : () => {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains:['localhost:3000']
      }
    })
  ],
  declarations: [NaviComponent, CartComponent, LoginComponent, SignupComponent],
  exports: [NaviComponent, CartComponent, LoginComponent, SignupComponent],
  providers: [AuthService, CartService, DrawerService, ProductService],
  entryComponents: [SignupComponent]
})
export class CoreModule { }
