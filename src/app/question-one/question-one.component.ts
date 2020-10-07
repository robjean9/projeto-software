import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.scss']
})
export class QuestionOneComponent implements OnInit {


  public selected = "verao";

  public next;
  public interval;

  public randomVideo = 0;

  question1 = 1;
  question2 = 3;
  question3 = 3;
  question4 = 4;

  removeAnswer = [];

  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer(){
    this.interval = setInterval(()=>{
      this.data.timeOnQuestionOne++;
    },1000)
  }

  async setAnswer(question, answer) {

    if (question === 1) {
      if (this.question1 === answer) {
        await this.generateRandomVideo();
        this.selected = 'congrats-next';
        // setTimeout(()=>{this.selected = 'inverno';},2000);
        this.removeAnswer = [];
        this.next='inverno';
      }else{
        this.removeAnswer.push(answer);
        this.data.errorsOnQuestionOne++;
      }
    }

    if (question === 2) {
      if (this.question2 === answer) {
        await this.generateRandomVideo();
        this.selected = 'congrats-next';
        // setTimeout(()=>{this.selected = 'outono';},2000);
        this.removeAnswer = [];
        this.next='outono';
      }else{
        this.removeAnswer.push(answer);
        this.data.errorsOnQuestionOne++;
      }
    }

    if (question === 3) {
      if (this.question3 === answer) {
        await this.generateRandomVideo();
        this.selected = 'congrats-next';
        // setTimeout(()=>{this.selected = 'primavera';},2000);
        this.removeAnswer = [];
        this.next='primavera';
      }else{
        this.removeAnswer.push(answer);
        this.data.errorsOnQuestionOne++;
      }
    }
    if (question === 4) {
      if (this.question4 === answer) {

        await this.generateRandomVideo();
        this.selected = 'congrats';
        this.removeAnswer = [];
      }else{
        this.removeAnswer.push(answer);
        this.data.errorsOnQuestionOne++;
      }
    }
  }

  generateRandomVideo(){
    this.randomVideo = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  }

  nextQuestion(){
    this.selected = this.next;
    this.next = '';
  }

  endLevel(){
    clearInterval(this.interval);
    this.data.save();
    setTimeout(()=>{
      this.router.navigate(['lesson/2']);},2000)
  }
}
