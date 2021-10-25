import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidDetailComponent } from './covid-detail/covid-detail.component';
import { SearchComponent } from './search/search.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { CountryCovidDetailComponent } from './country-covid-detail/country-covid-detail.component';

const routes: Routes = [
  {
    path: '', component: CovidDetailComponent,

  },
  {
    path: 'countries-covid-data', component: CountryTableComponent,

  },
  {
    path: 'country-covid-data/:name', component: CountryCovidDetailComponent,

  },
  {
    path: 'continent-covid-data/:query', component: SearchComponent,

  },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
