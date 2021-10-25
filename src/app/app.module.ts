import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CovidDetailComponent } from './covid-detail/covid-detail.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CountryTableComponent } from './country-table/country-table.component';
import { CountryCovidDetailComponent } from './country-covid-detail/country-covid-detail.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    CovidDetailComponent,
    CountryTableComponent,
    CountryCovidDetailComponent,
    SearchComponent,
    NavComponent, 
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  
    
  
    

  providers: [ MaterialModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
