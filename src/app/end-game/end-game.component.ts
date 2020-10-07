import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss']
})
export class EndGameComponent implements OnInit {

  constructor(public data: DataService, private router: Router) { }

  ngOnInit() {
  }

  


  goToLevel1(){
    this.router.navigate(['lesson/1'])

    this.data.save();
    
  }


  goToLevel2(){
    this.router.navigate(['lesson/2'])

    this.data.save();
  }

}
