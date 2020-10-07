import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private dbService: NgxIndexedDBService) {}
  public playerId;
  public playerName;

  public timeOnLessonOne = 0;
  public timeOnLessonTwo = 0;
  
  public timeOnQuestionOne = 0;
  public timeOnQuestionTwo= 0; 

  public errorsOnQuestionOne = 0;
  public errorsOnQuestionTwo = 0;


  public save() {
    if(this.playerId){
      this.dbService.update('results', {
        id: this.playerId,
        playerName: this.playerName,
        timeOnLessonOne: this.timeOnLessonOne,
        timeOnLessonTwo: this.timeOnLessonTwo,
        timeOnQuestionOne: this.timeOnQuestionOne,
        timeOnQuestionTwo: this.timeOnQuestionTwo,
        errorsOnQuestionOne: this.errorsOnQuestionOne,
        errorsOnQuestionTwo: this.errorsOnQuestionTwo,
      })
      .subscribe(data=>{
        console.log(data);
      })

    } else {
      this.dbService.add('results', {
        playerName: this.playerName,
        timeOnLessonOne: this.timeOnLessonOne,
        timeOnLessonTwo: this.timeOnLessonTwo,
        timeOnQuestionOne: this.timeOnQuestionOne,
        timeOnQuestionTwo: this.timeOnQuestionTwo,
        errorsOnQuestionOne: this.errorsOnQuestionOne,
        errorsOnQuestionTwo: this.errorsOnQuestionTwo,
      })
      .subscribe(key=>{
        console.log(key);
        this.playerId = key;
      })
    }
  }


  getResults(){
    return this.dbService.getAll('results');
  }
}