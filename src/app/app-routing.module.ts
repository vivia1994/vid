import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { MyHeaderComponent } from './components/my-header/my-header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [MyFooterComponent, MyHeaderComponent, HomePageComponent, LoginPageComponent]
})
export class AppRoutingModule { }
