import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyFooterComponent } from './components/my-footer/my-footer.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [MyFooterComponent]
})
export class AppRoutingModule { }
