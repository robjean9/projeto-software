import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-lesson-one',
  templateUrl: './lesson-one.component.html',
  styleUrls: ['./lesson-one.component.scss']
})
export class LessonOneComponent implements OnInit {

  public selected = "verao";
  public interval;
  constructor(private router: Router, private data: DataService) { }

  ngOnInit() {
    this.startTimer();
  }


  startTimer(){
    this.interval = setInterval(()=>{
      this.data.timeOnLessonOne++;
    },1000)
  }

  startQuestion1(){
    this.data.save();
    clearInterval(this.interval);
    console.log(this.data.timeOnLessonOne);
    this.router.navigate(['/question/1']);
  }
}
