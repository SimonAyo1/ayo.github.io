
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'


@Component({
  selector: 'app-country-covid-detail',
  templateUrl: './country-covid-detail.component.html',
  styleUrls: ['./country-covid-detail.component.css']
})
export class CountryCovidDetailComponent implements OnInit {

  public data: any
  public name: any
  public isLoading: boolean = true
  isCheckingNetwork: boolean = true
  isNetworkBad: boolean = false
  search_query: any

  constructor(private http: HttpClient, private route: ActivatedRoute ,   private routes: Router) {
    this.route.paramMap.subscribe((e: ParamMap) => {
      var name = e.get('name')
      this.name = name
      this.search_query = name

    })
    this.http.get("https://corona.lmao.ninja/v2/countries/" + this.name + "?yesterday=true&strict=false&query").subscribe((e) => {
      this.data = e
      this.isLoading = (this.data.cases > 5) ? false : true

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
