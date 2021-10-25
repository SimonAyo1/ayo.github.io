import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  public data: any
 search_query: any
public isLoading: boolean = true
isCheckingNetwork: boolean = true
isNetworkBad: boolean = false


  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((e: ParamMap) => {
      var query = e.get('query')
      this.search_query = query

    })
    this.http.get("https://corona.lmao.ninja/v2/continents/" + this.search_query + "?yesterday=true&strict=false&query").subscribe((e) => {
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
