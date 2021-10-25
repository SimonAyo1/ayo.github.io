import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-covid-detail',
  templateUrl: './covid-detail.component.html',
  styleUrls: ['./covid-detail.component.css']
})
export class CovidDetailComponent implements OnInit {


  search_query: any
  public isLoading: boolean = true
  isCheckingNetwork: boolean = true
  isNetworkBad: boolean = false
  public data : any = []
  constructor(private http : HttpClient) { 
    http.get("https://corona.lmao.ninja/v2/continents?yesterday=true&sor")
    .subscribe((e)=> {
      
      this.data = e
      this.isLoading = (this.data[0].cases > 5) ? false : true
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