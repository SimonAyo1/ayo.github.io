import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {


  search_query: any
  public data : any = []
  isCheckingNetwork: boolean = true
  isNetworkBad: boolean = false
  public isLoading: boolean = true
 

  constructor(private http : HttpClient) { 
    http.get("https://corona.lmao.ninja/v2/countries?yesterday&sort")
    .subscribe((e)=> {
      console.log(e)
     
      this.data = e
       this.isLoading = (this.data[0].country = "Afghanistan") ? false : true
    })
  }
  ngOnInit(): void {

    setTimeout(() => {
      this.isCheckingNetwork = false;
    }, 8000);
    setTimeout(() => {
      if (!this.isCheckingNetwork && this.isLoading) {
        this.isNetworkBad = true
      }
    }, 9000);

  }

}
