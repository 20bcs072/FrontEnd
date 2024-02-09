import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouselistComponent } from './houselist/houselist.component';
import { HousecreateComponent } from './housecreate/housecreate.component';
import { HouseeditComponent } from './houseedit/houseedit.component';
import { HomescreenComponent } from './homescreen/homescreen.component';


const routes: Routes = [
  {path:'home',component:HomescreenComponent},
  {path:'hlist', component:HouselistComponent},
  {path:'',redirectTo:'hlist',pathMatch:"full"},
  {path:'add',component:HousecreateComponent},
  {path:'edit/:bookID',component:HouseeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
