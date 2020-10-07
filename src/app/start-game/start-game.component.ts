import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.scss']
})
export class StartGameComponent implements OnInit {

  constructor(public data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.timeOnLessonOne = 0;
    this.data.timeOnLessonTwo = 0;
    this.data.timeOnQuestionOne = 0;
    this.data.timeOnQuestionTwo = 0;
    this.data.errorsOnQuestionOne = 0;
    this.data.errorsOnQuestionTwo = 0;
    this.data.playerId = undefined;
    this.data.playerName = "";
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
