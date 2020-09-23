import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {

  constructor(public data: DataService, private router: Router) { }

  ngOnInit() {
  }


  goToLevel1(){
    this.router.navigate(['lesson/1'])
  }


  goToLevel2(){
    this.router.navigate(['lesson/2'])
  }

}
