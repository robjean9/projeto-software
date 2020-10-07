import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-lesson-two',
  templateUrl: './lesson-two.component.html',
  styleUrls: ['./lesson-two.component.scss']
})
export class LessonTwoComponent implements OnInit {

  public selected = "verao";
  public interval;
  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer(){
    this.interval = setInterval(()=>{
      this.data.timeOnLessonTwo++;
    },1000)
  }


  startQuestion1(){
    clearInterval(this.interval);
    this.data.save();
    console.log(this.data.timeOnLessonOne);
    this.router.navigate(['/question/2']);
  }
}
