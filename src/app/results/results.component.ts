import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {


  public results = [];

  constructor(public data: DataService, private router: Router) { }


  ngOnInit() {
    this.data.getResults()
    .subscribe(data=>{
      this.results = data;
    })
  }

}
