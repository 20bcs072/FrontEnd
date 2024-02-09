import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseeditComponent } from './houseedit/houseedit.component';
import { HouselistComponent } from './houselist/houselist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HousecreateComponent } from './housecreate/housecreate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { InputTextModule } from 'primeng/inputtext';
//import { FooterComponent } from './footer/footer.component';
//import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    HouseeditComponent,
    HouselistComponent,
    HousecreateComponent,
    HomescreenComponent,
   
   // FooterComponent,
    //SidebarComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CardModule,
    ButtonModule,
    FormsModule,
    RouterModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
